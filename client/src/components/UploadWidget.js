import React, { useState, Component } from "react";
import ImageUpload from "../components/ImageUpload";

import "../widgetApp.css";



class CloudinaryUploadWidget extends Component {
	componentDidMount() {
		var myWidget = window.cloudinary.createUploadWidget(
			{
				cloudName: "dkm1ip3w2",
				uploadPreset: "ABCDE12345",
				sources: ["url", "camera", "local"],
				showSkipCropButton: false,
				multiple: true,
				defaultSource: "local",
			},
			(error, result) => {
				if (!error && result && result.event === "success") {
					console.log("Done! Here is the image URL: ", result.info.url);
					this.props.setPicturesURL(result.info.url);
				}
			}
		);
		document.getElementById("upload_widget").addEventListener(
			"click",
			function () {
				myWidget.open();
			},
			false
		);
	}

	render() {
		return (
			<button id='upload_widget' className='cloudinary-button'>
				Add a Photo
			</button>
		);
	}
}

export default CloudinaryUploadWidget;