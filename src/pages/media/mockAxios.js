
const response = {
  status: 202,
  data: [
    {
      filename: 'picture1.jpg', 
      directory: 'picture', 
      url: 'https://images.unsplash.com/photo-1558869031-49d71660e2d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80', 
      size: 45000, 
      createdAt: '',
    },
    {
      filename: 'picture2.jpg', 
      directory: 'picture', 
      url: 'https://images.unsplash.com/photo-1554366347-897a5113f6ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80', 
      size: 45000, 
      createdAt: '',
    },
    {
      filename: 'picture3.jpg', 
      directory: 'picture', 
      url: 'https://images.unsplash.com/photo-1557167045-d01287bedddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 
      size: 45000, 
      createdAt: '',
    },
    {
      filename: 'picture4.jpg', 
      directory: 'picture', 
      url: 'https://images.unsplash.com/photo-1558869031-49d71660e2d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80', 
      size: 45000, 
      createdAt: '',
    },
    {
      filename: 'picture5.jpg', 
      directory: 'picture', 
      url: 'https://images.unsplash.com/photo-1554366347-897a5113f6ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80', 
      size: 45000, 
      createdAt: '',
    },
    {
      filename: 'picture6.jpg', 
      directory: 'picture', 
      url: 'https://images.unsplash.com/photo-1557167045-d01287bedddf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60', 
      size: 45000, 
      createdAt: '',
    },
  ],
};

/**
 * axios
 */
export default () => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve(response);
    }, 1000);
  });
};