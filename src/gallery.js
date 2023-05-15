import React, { useState } from "react";
function Profile({ url, description }) {
  return (
    <div>
      <img src={url} width={200} alt={description} />
      <h3>{description}</h3>
    </div>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists 👨🏻‍🔬 </h1>
      <Profile
        url="https://i.imgur.com/MK3eW3Am.jpg"
        description="Katherine Johnson"
      />
      <Profile
        url={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
        }
        description="Albert Einstein
        "
      />
      <Profile
        url={
          "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTXOZC_fjw5qwdcq8XbBYwpqa6FUBFw0GazwW4Ca43-4y8k63vEsdCaWIQUseHYKvzw"
        }
        description="Galileo Galilei"
      />
    </section>
  );
}
