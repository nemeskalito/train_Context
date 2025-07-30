import { memo, useState } from "react";
import "./App.css";

const UserInfo = () => {
  console.log("UserInfo");

  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  const nameChangeClick = () => {
    const name = user.name == "Игорь" ? "Иван" : "Игорь";
    setUser({ ...user, name });
  };
  const ageChangeClick = () => {
    const age = ++user.age;
    setUser({ ...user, age });
  };
  const activeChangeClick = () => {
    const isActive = !user.isActive;
    setUser({ ...user, isActive });
  };
  return (
    <div className="block">
      <h3>Профиль пользователя</h3>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активность: {user.isActive ? "да" : "нет"}</p>
      <div className="user__btn">
        <button onClick={nameChangeClick}>Сменить имя</button>
        <button onClick={ageChangeClick}>Увеличить возраст</button>
        <button onClick={activeChangeClick}>Переключить активность</button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default memo(UserInfo);
