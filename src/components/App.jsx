import React, { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import { fetchImages } from 'services/ImagesAPI';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { imageMaper } from 'services/mapper';
// import { Loader } from './Loading/Loading';
// import { ToastContainer, toast } from 'react-toastify';
// import Modal from './Modal/Modal';
// import { ColorRing } from 'react-loader-spinner';
// import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
// export class App extends Component {
//   state = {
//     searchData: '',
//     images: [],
//     page: 0,
//     isLoading: null,
//     error: null,
//     totalHits: null,
//     currentImage: null,
//     isShown: false,
//   };
//   componentDidUpdate(_, prevState) {
//     const { searchData, page } = this.state;
//     if (searchData !== prevState.searchData || page !== prevState.page) {
//       this.getImage();
//     }
//   }
// handleSubmit = searchData => {
//   if (searchData.trim() === '') {
//     return toast.error('Enter the meaning for search');
//   } else if (searchData === this.state.searchData) {
//     return;
//   }
//   this.setState({
//     searchData: searchData,
//     page: 1,
//     images: [],
//   });
// };

//   getImage = () => {
//     const { page, searchData, isShown } = this.state;
//     this.setState({ isLoading: true });
//     fetchImages(page, searchData, isShown)
//       .then(({ data: { totalHits, hits } }) => {
//         this.setState({ totalHits });
//         this.setState(prevState => ({
//           images: [...prevState.images, ...imageMaper(hits)],
//           isShown: true,
//         }));
//       })
//       .catch(error => {
//         this.setState({
//           error: error.message,
//         });
//       })
//       .finally(() =>
//         this.setState({
//           isLoading: false,
//         })
//       );
//   };
//   openMoadl = data => {
//     this.setState({ currentImage: data });
//   };
//   closeModal = () => {
//     this.setState({ currentImage: null });
//   };
//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };
//   render() {
//     // const { openModal, onSubmit } = this;
//     const { images, isLoading, currentImage, isShown, totalHits } = this.state;
//     return (
{
  /* <>
  <SearchBar onSubmit={this.handleSubmit} />
</>; */
}
//
//           {isShown && (
//             <ImageGallery
//               images={images}
//               openModal={this.openMoadl}
//               closeModal={this.closeModal}
//             />
//           )}
//           {isShown && images.length < totalHits && (
//             <LoadMoreBtn clickHandler={this.loadMore} />
//           )}
//         </>
//         <ToastContainer
//           position="top-center"
//           autoClose={3000}
//           theme="colored"
//         />
//         {isLoading && <ColorRing />}
//         {currentImage && (
//           <Modal image={currentImage} closeModal={this.closeModal} />
//         )}
//       </>
//     );
//   }
// }
