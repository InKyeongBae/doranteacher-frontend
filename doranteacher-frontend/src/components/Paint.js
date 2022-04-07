import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import './literallycanvas.css';

// Documentation: http://literallycanvas.com/
const LC = require('literallycanvas');
let _lc = null;

function Paint() {
	const [images, setImages] = useState([]);

	const onInit = (lc) => {
		_lc = lc;
		console.log(lc);

		// 라벨 텍스트 stroke -> 색상
		const colorpicker = document.getElementsByClassName('color-well')[0];
		const change = colorpicker.querySelector('label');
		change.innerText = "펜 색상";

		const reset = document.getElementsByClassName('lc-clear toolbar-button fat-button disabled')[0];
		reset.innerText = "새로 쓰기";
	};

	const onSave = (event) => {
		if (!_lc) return;
		const img = _lc.getImage();
		if (!img) return;
		try {
			const imgData = img.toDataURL();
			setImages([...images, imgData]);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<div>
				<LC.LiterallyCanvasReactComponent
					onInit={onInit}
					backgroundColor="#ffffff"
					// 글씨판 가로세로 사이즈 설정(픽셀)
					imageSize={{ width: 500, height: 210 }}
					tools={[LC.tools.Pencil, LC.tools.Eraser]}
					strokeWidths={[3, 5, 7, 10, 15, 25]}
					imageURLPrefix="/img"
				/>
			</div>
			<div style={{ marginTop: 10 }}>
				<button style={{ width: 150, margin: 10, fontSize: 14 }} onClick={onSave}>
					Save As Image
				</button>
				<button style={{ width: 150, margin: 10, fontSize: 14 }} onClick={() => setImages([])}>
					Clear Images
				</button>
			</div>
			<ul style={{ marginTop: 10, listStyleType: 'none' }}>
				{images.map((img, index) => (
					<li key={index}>
						<img src={img} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Paint;
