import logo from './logo.png';
import video_banner from './home-page-banner.mp4'
import people from './people.png'
import people_org from './people-org.png'


export const assets = { 
    logo,
    video_banner,
    people,
    people_org,
}

export const steps = [
  {
    step: "Step 1",
    title: "Select an image",
    description:
      "First, choose the image you want to remove the background from. Your image format can be PNG or JPG. We support all image dimensions."
  },
  {
    step: "Step 2",
    title: "Let magic remove the background",
    description:
      "Our tool automatically removes the background from your image. Choose any background color you like, including white or transparent."
  },
  {
    step: "Step 3",
    title: "Download your image",
    description:
      "After selecting a new background color, download your photo instantly. You can also save it in the app by creating an account."
  }
];

 export const categories = ["People", "Products",  "Animal", "Cars", "Graphics"]

export const plans = [
  {
    id: "Basic",
    name: "Basic Package",
    price: 499,
    credits: "100 credits",
    description: "Best for Personal use",
    popular: false,
  },
  {
    id: "Premium",
    name: "Premium Package",
    price: 899,
    credits: "250 credits",
    description: "Best for Business Use.",
    popular: true,
  },
  {
    id: "Ultimate",
    name: "Ultiimate Package",
    price: 1499,
    credits: "1000 credits",
    description: "Best for enterprise use.",
    popular: false,
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Backdrop completely changed our workflow. The AI background removal is insanely accurate and saves us hours every week.",
    author: "Anthony Walker",
    handle: "@webarchitect",
  },
  {
    id: 2,
    quote:
      "Backdrop is leaps and bounds ahead of the competition. A thousand times better. It simplified our entire creative process.",
    author: "Sarah Johnson",
    handle: "@techlead_sarah",
  },
  {
    id: 3,
    quote:
      "We were impressed by how well Backdrop handles fine hair and edges without making images look jagged. Truly impressive AI.",
    author: "Daniel Brooks",
    handle: "@danieldesigns",
  },
];

export const FOOTER_CONSTANTS = [
   { 
       url: "https://facebook.com", 
       logo: "https://img.icons8.com/?size=100&id=13912&format=png&color=000000"
   },
   { 
       url: "https://linkedin.com", 
       logo: "https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
   }, 
   { 
       url: "https://instagram.com", 
       logo: "https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
   }, 
   { 
       url: "https://twitter.com", 
       logo: "https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
   }, 
]

