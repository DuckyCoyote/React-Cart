import React from "react";

import { XCircleIcon } from "@heroicons/react/24/solid";

export default function OrderCard(props) {
  const { id, title, imageUrl, price, HandleDelete } = props;

  let renderXMarkIcon;
  if (HandleDelete) {
    renderXMarkIcon = (
      <XCircleIcon
        onClick={() => HandleDelete(id)}
        className="w-6 h-6 text-red-500 cursor-pointer"
      />
    );
  }

  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>

        {renderXMarkIcon}
      </div>
    </div>
  );
}
