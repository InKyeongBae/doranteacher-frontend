import React, { useState } from "react";
import "./Paint.css";
import "./literallycanvas.css";

// Documentation: http://literallycanvas.com/
const LC = require("literallycanvas");
let _lc = null;

function Paint() {
	const [images, setImages] = useState([]);

	const onInit = lc => {
	  _lc = lc;
	};
  
	const onSave = event => {
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
  
	const loadBackground = event => {
	  if (!_lc) return;
	  const img = new Image();
	  img.src = "/img/map2.png";
	  let shape = LC.createShape("Image", { x: 0, y: 0, image: img, scale: 0.5 });
	  _lc.saveShape(shape);
	};
  
	return (
	  <div style={{ padding: 10 }}>
		<div>
		  <LC.LiterallyCanvasReactComponent
			onInit={onInit}
			imageURLPrefix="/img"
		  />
		</div>
		<div style={{ marginTop: 10 }}>
		  <button
			style={{ width: 150, margin: 10, fontSize: 14 }}
			onClick={loadBackground}
		  >
			Load Map
		  </button>
		  <button
			style={{ width: 150, margin: 10, fontSize: 14 }}
			onClick={onSave}
		  >
			Save As Image
		  </button>
		  <button
			style={{ width: 150, margin: 10, fontSize: 14 }}
			onClick={() => setImages([])}
		  >
			Clear Images
		  </button>
		</div>
		<ul style={{ marginTop: 10, listStyleType: "none" }}>
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