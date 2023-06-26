import React from "react";

function ServisContent({Name}) {
  return (
    <div>
      {/* <span className="text-grayF text-[14px] font-normal font-BeauSans leading-5"> */}
      <h1 className="text-white text-[23px] font-BeauSans font-bold capitalize">
        {/* Number Management */} {Name}
      </h1>
      {/* Here you can manage all your numbers */}
      {/* </span> */}
    </div>
  );
}

export default ServisContent;
