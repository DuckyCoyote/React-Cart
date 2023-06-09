import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function OrdersCard(props) {
  const { TotalPrice, totalProducts, date } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-3">
      <p className="flex flex-col items-center">
        <span>{date}</span>
        <span>
          <span className="font-medium">Productos: </span>
          {totalProducts}
        </span>
        <span>
          <span className="font-medium">Total: </span>${TotalPrice}
        </span>
      </p>
      <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer ml-5" />
    </div>
  );
}
