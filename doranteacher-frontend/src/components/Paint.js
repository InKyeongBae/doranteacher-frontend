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
		// const labeltext = document.getElementsByClassName('color-well')[0];
		// labeltext.innerHTML =
		// 	'<label float="left">색상</label><br><div class="color-well-color-container" style="background-color: white;"><div class="color-well-checker color-well-checker-top-left"></div><div class="color-well-checker color-well-checker-bottom-right" style="left: 50%; top: 50%;"></div><div class="color-well-color" style="background-color: rgb(0, 0, 0);"> </div></div>';
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
					imageSize={{ width: null, height: 250 }}
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
