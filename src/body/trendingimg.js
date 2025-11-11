import "./trendingimg.css";
function TrendingProductsImages() {
  function Svghovereffect() {
    return (
      <div className="overlayBar">
        <div className="svgdiv" id="svgdiv1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
          <div className="svginfo">Add to cart</div>
        </div>
        <div className="svgdiv" id="svgdiv2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search-icon lucide-search"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <div className="svginfo">Quick view</div>
        </div>
        <div className="svgdiv" id="svgdiv3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-heart-icon lucide-heart"
          >
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          </svg>
          <div className="svginfo">Add to wish list</div>
        </div>
        <div className="svgdiv" id="svgdiv4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-refresh-ccw-icon lucide-refresh-ccw"
          >
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 16h5v5" />
          </svg>
          <div className="svginfo">Add to compare</div>
        </div>
      </div>
    );
  }
  return (
    <div className="trendImages">
      <div className="div1">
        <div className="divPart1" id="div1">
          <Svghovereffect></Svghovereffect>
        </div>
        <div className="divPart2">
          <p>Aliquam Consequat</p>
          <p>Fruits</p>
          <p className="money">
            $26 <span> $362</span>
          </p>
        </div>
      </div>
      <div className="div1">
        <div className="divPart1" id="div2">
          <Svghovereffect></Svghovereffect>
        </div>
        <div className="divPart2">
          <p>Donec Non est</p>
          <p>Fruits</p>
          <p className="money">
            $46 <span> $382</span>
          </p>
        </div>
      </div>
      <div className="div1">
        <div className="divPart1" id="div3">
          <Svghovereffect></Svghovereffect>
        </div>
        <div className="divPart2">
          <p>Etiam Gravida</p>
          <p>Fruits</p>
          <p className="money">
            $56 <span> $322</span>
          </p>
        </div>
      </div>
      <div className="div1">
        <div className="divPart1" id="div4">
          <Svghovereffect></Svghovereffect>
        </div>
        <div className="divPart2">
          <p>Fusce Aliquam </p>
          <p>Fruits</p>
          <p className="money">
            $66 <span> $312</span>
          </p>
        </div>
      </div>
      <div className="div1">
        <div className="divPart1" id="div5">
          <Svghovereffect></Svghovereffect>
        </div>
        <div className="divPart2">
          <p>Letraset Sheets</p>
          <p>Fruits</p>
          <p className="money">
            $38 <span> $262</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default TrendingProductsImages;
