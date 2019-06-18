export default () => {
  return new Promise((resolve, reject) => {
    const response = {
      status: 202,
      data: [
        {
          type: 'template',
          filename: 'index.ejs',
          createdAt: 'Sat May 18 2019 18:12:53',
        },
        {
          type: 'template',
          filename: 'pages.ejs',
          createdAt: 'Sat May 18 2019 18:12:53',
        },
        {
          type: 'template',
          filename: 'header.ejs',
          createdAt: 'Sat May 18 2019 18:12:53',
        },
        {
          type: 'template',
          filename: 'footer.ejs',
          createdAt: 'Sat May 18 2019 18:12:53',
        },
        {
          type: 'page',
          filename: 'about.ejs',
          createdAt: 'Sat May 18 2019 18:12:53',
          url: 'about',
          title: 'About',
          keywords: '',
          description: '',
          themeColor: '',
          meta: '',
          script: '',
          style: '',
        },
      ],
    };
    resolve(response);
  });
};