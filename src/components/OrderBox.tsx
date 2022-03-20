import { useEffect, useMemo, useState } from "react";

function OrderBox({ items, address, created }: any) {

  const total = useMemo(() => {
    let sum = 0;
    items.forEach((item: any) => {
      sum += item.quantity * item.product.price;
    });
    return sum;
  }, [])

  return (
    <div className="col-span-12 md:col-span-8 p-8 shadow border rounded-lg hover:shadow-lg">
      <div className="flex justify-between items-center">
        <p className="text-lg mb-2 font-bold">Order Overview</p>
        <p className="text-sm mb-2 font-bold">{created}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-12 border-b">
          <div className="col-span-9 font-bold">Product</div>
          <div className="col-span-3 font-bold">Total</div>
        </div>
        {items &&
          items.map((item: any, index: number) => (
            <div className="grid grid-cols-12 border-b" key={index}>
              <div className="col-span-9">
                {item.product.title} x {item.quantity}
              </div>
              <div className="col-span-3">{item.quantity * item.product.price} BDT</div>
            </div>
          ))}
        <div className="grid grid-cols-12 border-b">
          <div className="col-span-9 font-bold">Total</div>
          <div className="col-span-3 font-bold">{total} BDT</div>
        </div>
      </div>
      <p className="mt-4"><b>Address:</b> {address.address}, {address.city}, {address.post_code} </p>
    </div>
  );
}

export default OrderBox;
