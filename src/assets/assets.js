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
