import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComicList() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedComic, setSelectedComic] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/comics')
      .then(response => {
        setComics(response.data.data.results);
        console.log(response.data.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the comics:', error);
        setLoading(false);
      });
  }, []);

  const handleShowModal = (comic) => {
    console.log(comic);
    setSelectedComic(comic);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) {
    return <div>Loading comics...</div>;
  }

  return (
    <>
      <div className='container py-3'>
        <h1 className='text-center mb-4'>Marvel Comics</h1>
        <div className='row'>
          {comics.map(comic => (
            <div key={comic.id} className='col-sm-6 col-md-4 col-lg-3 mb-4'>
              <div className='card h-100'>
                {comic.images && comic.images[0] && (
                  <img 
                    src={`${comic.images[0].path}.jpg`} 
                    className="card-img-top" 
                    alt={comic.title}
                  />
                )}
                <div className='card-body'>
                  <h5 className='card-title'>{comic.title}</h5>
                  <button onClick={() => handleShowModal(comic)} className='btn btn-primary'>
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedComic && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedComic.title}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p><strong>Description:</strong> {selectedComic.description || 'No description available.'}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal-backdrop fade show"></div>
      )}
    </>
  );
}

export default ComicList;
