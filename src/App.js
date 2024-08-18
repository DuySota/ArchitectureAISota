
import React, { useState } from 'react';
import './App.scss';
import ImageUploading from 'react-images-uploading';
function App() {
  // const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);

  };
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="App">
      <div className='header'>
        <div className='header1'>
          <div className='logo'></div>
          <div className='under-content'>
            <div className='content-text'>
              <div className='title'>AI image generator</div>
              <div className='des'>An AI text-to-image that gives you endless results in real time. With a variety of models to choose, Flux is now available on SotaArc. Try it now!</div>
            </div>
            <div className='gif-header'>
              <video src="https://fps.cdnpk.net/images/ai/tti/ai-image-generator-by-freepik-hero-demo.mp4" autoPlay muted width='1000px'></video>
            </div>

          </div>
        </div>

      </div>
      <div className='body'>
        <div className='input-gen'>
          <div className='ske-area'>
            <ImageUploading
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (

                <div className="upload__image-wrapper">
                  <div
                    className="upload__image-box"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image['data_url']} alt="" />
                        <div className='close-ske' onClick={() => onImageRemove(index)}></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
            <span className='upload-no'>Upload sketch</span>
          </div>
          <div className='syle-gen'>
            {[0, 1, 2, 3].map((item, index) => (
              <div
                key={index}
                className='style-item'
                
              >
                <div className={`img-style ${selectedIndex === index ? 'active' : ''}`} onClick={() => handleItemClick(index)}></div>
                <span className='text-style'>Modern</span>
              </div>
            ))}
          </div>
          <textarea class="gradient-box" placeholder="enter your prompt..."/>
          <button className='btn-gen'>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
