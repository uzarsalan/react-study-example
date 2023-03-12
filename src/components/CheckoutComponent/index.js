import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../store/slices/ordersSlice";
import Input from "../Input";

const Checkout = ({ cart, sum, sumWithDisc }) => {
  const initialOrderData = {
    name: "",
    phoneNumber: "",
    persons: 1,
    address: "",
    note: "",
  };

  let [orderData, setOrderData] = useState(initialOrderData);
  let [errors, setErrors] = useState({});
  let [countryCode, setCountryCode] = useState("7");
  const ordersStore = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!orderData.name || orderData.name.length < 2) {
      setErrors({ ...errors, name: "Заполните поле" });
      return;
    }

    const submitOrderData = {
      name: orderData.name,
      phoneNumber: orderData.phoneNumber,
      persons: orderData.persons,
      address: orderData.address,
      note: orderData.note,
      foods: cart.items.map((cartItem) => cartItem.food.id),
      foodQty: cart.items.reduce((acc, cartItem) => {
        acc[cartItem.food.attributes.name] = cartItem.qty;
        return acc;
      }, {}),
    };

    console.log(submitOrderData);

    dispatch(postOrder(submitOrderData));
  };
  if (ordersStore.createStatus == "fulfilled") {
    return <h1>Ваш заказ оформлен. Ожидайте доставки</h1>;
  } else {
    return (
      <>
        <h2>Итого: {sumWithDisc} руб</h2>
        <p>Имя {orderData.name}</p>
        <p> {orderData.phoneNumber}</p>
        <p> {orderData.persons}</p>
        <p> {orderData.address}</p>
        <p> {orderData.note}</p>
        <p> {countryCode}</p>
        <form onSubmit={onFormSubmit}>
          <Input
            label="ФИО"
            value={orderData.name}
            onChange={(e) =>
              setOrderData({ ...orderData, name: e.target.value })
            }
          />
          {errors.name != "" && <p className="text-red-500">{errors.name}</p>}
          <Input
            label="Телефон"
            mask="(999)9999999"
            value={orderData.phoneNumber}
            onChange={(e) =>
              setOrderData({
                ...orderData,
                phoneNumber: e.target.value,
              })
            }
            prefix={
              <select onChange={(e) => setCountryCode(e.target.value)}>
                <option value={7}>7 Россия</option>
                <option selected value={1}>
                  1 США
                </option>
              </select>
            }
          />
          <Input
            label="Количество персон"
            value={orderData.persons}
            onChange={(e) =>
              setOrderData({ ...orderData, persons: e.target.value })
            }
          />
          <Input
            label="Адрес"
            value={orderData.address}
            onChange={(e) =>
              setOrderData({ ...orderData, address: e.target.value })
            }
          />
          <Input
            label="Примечание"
            value={orderData.note}
            onChange={(e) =>
              setOrderData({ ...orderData, note: e.target.value })
            }
          />
          <input
            type="submit"
            disabled={ordersStore.createStatus == "pending"}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            value={
              ordersStore.createStatus == "pending" ? "Загрузка..." : "Заказать"
            }
          />
        </form>
      </>
    );
  }
};

export default Checkout;
