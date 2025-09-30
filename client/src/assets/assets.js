import logo1 from './logo1.png'
import logo_icon from './logo_icon.png'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import image1 from './image1.png'
import image2 from './image2.png'


export const assets = {
    image1,
    image2,
    logo1,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon
}

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_icon,
        name:'Sathwik K',
        role:'Graphic Designer',
        stars:5,
        text:`Texel has become my go-to tool for generating creative design concepts. It saves me hours of manual brainstorming and gives me fresh inspiration for every project.`
    },
    {
        image:profile_icon,
        name:'Mukesh M',
        role:'Product Developer',
        stars:5,
        text:`Texel has streamlined my workflow for product visuals and mockups. It's fast, intuitive, and consistently delivers high-quality images that match my ideas perfectly.`
    },
    {
        image:profile_icon,
        name:'Rithesh Kharvi',
        role:'YouTuber',
        stars:4,
        text:`Texel makes creating custom thumbnails effortless. I can now experiment with multiple designs quickly, which has boosted my channel's overall engagement.`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]