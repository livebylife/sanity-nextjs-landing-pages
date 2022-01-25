export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f0380eaad7bf68836c47e3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-q4kngy2q',
                  apiId: 'd0d3d37e-1475-42c0-b198-0003f0ade29f'
                },
                {
                  buildHookId: '61f0380fc7407f5eca37e7c5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y12dejmq',
                  apiId: '1e72deb6-cb55-4176-ac03-bc02b11d6e2c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/livebylife/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y12dejmq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
