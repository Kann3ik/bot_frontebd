import { useTelegram } from "../hooks/useTelegram";
//@ts-ignore
const web = window.Telegram.WebApp;

export const Header = () => {
  const { tg, user } = useTelegram();
  
  return (
    <>
      <h2 className="text-[#5258b0] font-bold text-xl leading-7 tracking-[1px]">LiveCall</h2>
      <p className="mt-1 text-sm leading-6">Добро пожаловать {user?.last_name} {user?.first_name}</p>
      <p className="mt-1 text-sm leading-6">Кнопка видеозвонка для сайта.</p>
    </>
  )
}