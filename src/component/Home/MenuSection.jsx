import React from "react";

const MenuSection = () => {
  return (
    <div className="my-12">
      <h1 className="text-center text-5xl font-bold">Menu List with Price</h1>

      <div className="flex justify-center my-10  gap-20">
        <div>
          <h4 className="text-3xl">Warm France's Dip & Chips</h4>
          <p className="w-96">
            France's and artichokes in a creamy cheese dip with warm tortilla
            chips & salsa.
          </p>
        </div>
        <div>
          <p className="text-primary">$10</p>
        </div>
      </div>

      <div className="flex justify-center my-10  gap-20">
        <div>
          <h4 className="text-3xl">Key Wast Machos</h4>
          <p className="w-96">
            Crisp tortilla and plantain chips covered with lightly spiced ground
            beef, melted cheese, pickled jalapeños, guacamole, sour cream and
            salsa.
          </p>
        </div>
        <div>
          <p className="text-primary">$15</p>
        </div>
      </div>

      <div className="flex justify-center my-10  gap-20">
        <div>
          <h4 className="text-3xl">Crispy Onions Rings</h4>
          <p className="w-96">
            A heaping mountain of rings, handmade with Panko breading and
            shredded coconut flakes.
          </p>
        </div>
        <div>
          <p className="text-primary">$20</p>
        </div>
      </div>

      <div className="flex justify-center my-10  gap-20">
        <div>
          <h4 className="text-3xl">Lobster & Shrimp Quesadilla</h4>
          <p className="w-96">
            Lobster and tender shrimp, with onions, sweet peppers, spinach and
            our three cheese blend. Griddled and served with tomato salsa and
            sour cream.
          </p>
        </div>
        <div>
          <p className="text-primary">$12</p>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
