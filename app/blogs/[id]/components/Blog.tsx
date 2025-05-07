// app/blog/page.tsx
import React from 'react';
import BlogPost from './BlogPost';
// import BlogPost from '@/components/BlogPost';

export default function BlogPage() {
  // Mock data for the blog post
  const mockData = {
    introduction: `Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend 
      faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. 
      Mauris posuere vulputate arcu amet, maecenas fermentum. At feugiat sapien varius id.`,
    
    bodyContent: [
      `Donec enim enim lorem vitae duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet
      pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitam
      malesuada fringilla.`,
      
      `Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur
      convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra
      purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
      aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu
      vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
      porttitor.`,
      
      `Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque
      congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci,
      tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam
      nibh orci.`
    ],
    
    quote: {
      text: "In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear.",
      author: "Olivia Blake",
      title: "Product Designer"
    },
    
    softwareTools: `Praesent morbi feugiat id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper
      porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi
      mattis id si ac pellentesque ac.`,
    
    resources: [
      {
        title: "Lectus et duis vitae porttitor arcu gravida morbi"
      },
      {
        title: "Eu turpis posuere semper feugiat volutpat est, pharetra suspendisse. Aenean vel in vitae placerat",
        link: "#"
      },
      {
        title: "Suspendisse maecenas ac donec scelerisque diam sed est duis purus"
      }
    ],

    conclusion: [
      `Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies
      ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam
      sed. Nisl at scelerisque amet nulla purus habitasse.`,
      
      `Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi
      massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec dui
      est. Duis cubilia elit id dictum augue utm turtor commodo cursus.`,
      
      `Quisque faucibus netus feugiat turtor vise feugiat lacus aliqpet. Nam elementum urna
      nisi alequet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id
      eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc
      tortor.`,
      
      `Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus
      diam.`
    ]
  };

  return <BlogPost {...mockData} />;
}