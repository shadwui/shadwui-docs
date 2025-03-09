import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductHunt = () => {
  return (
    <Link
      href="https://www.producthunt.com/posts/shadwui?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-shadwui"
      target="_blank"
    >
      <Image
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=939823&theme=light&t=1741509697812"
        alt="Shadwui - Beautiful&#0032;ui&#0032;components&#0032;built&#0032;with&#0032;tailwind&#0032;css&#0032;and&#0032;react | Product Hunt"
        style={{ width: "240px", height: "50px" }}
        width="250"
        height="54"
      />
    </Link>
  );
};

export default ProductHunt;