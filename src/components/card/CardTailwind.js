import React from "react";

const CardTailwind = () => {
  return (
    <div className="relative">
      <div>
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=400x300&vertical=top"
          alt=""
        />
      </div>
      <div>
        <div>
          <div>
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=400x300&vertical=top"
              alt=""
            />
            <span>@zndrson</span>
          </div>
          <div>
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </div>
        </div>
        <div>
          <h3>Cosmic Perspective</h3>
          <span>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
