import React, { useState } from 'react';

export default function LikeButton() {
  const [like, setLike] = useState(false);

  return (
    <div className="like-btn">
      <h2 onClick={() => setLike((prevState) => !prevState)}>
        
      </h2>
    </div>
  )
}
