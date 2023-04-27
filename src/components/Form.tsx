import React, { useCallback, useEffect, useState } from 'react'
import {useTelegram} from "../hooks/useTelegram";

export const Form = () => {
  const [ formData, setFormData ] = useState<{ name: string, phone: string, email: string, text: string }>({ name: '', phone: '', email: '', text: '' });
  const { tg, queryId, user } = useTelegram();

  const onSendData = useCallback(() => { 
    if(!formData.name || !formData.email || !formData.phone) {
      alert('Не заполнены все обязательные поля!');
      return;
    }
    const data = {
      formData,
      userId: user?.id,
      queryId
    }

    fetch('http://localhost:8000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }, [formData])

  useEffect(() => {
    tg.MainButton.setParams({
        text: 'Отправить заявку',
        color: '#5258b0'
    });

    tg.MainButton.show();
  }, []);

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData);

    return () => tg.offEvent('mainButtonClicked', onSendData);
  }, [onSendData])

  const onChangeData = (e: any, key: string) => setFormData((prevState: any) => ({...prevState, [key]: e.target.value}));

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10">
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4">

            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 after:content-['*'] after:text-red-600 after:pl-1">
                Ваше имя
              </label>
              <div className="mt-1">
                <input
                required 
                  value={formData.name}
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => {onChangeData(e, 'name')}}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5258b0] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 after:content-['*'] after:text-red-600 after:pl-1">
                Контактный телефон
              </label>
              <div className="mt-1">
                <input
                required 
                  value={formData.phone}
                  type="number"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  onChange={(e) => {onChangeData(e, 'phone')}}
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-[#5258b0] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 after:content-['*'] after:text-red-600 after:pl-1">
                Электронная почта
              </label>
              <div className="mt-2">
                <input
                required 
                  value={formData.email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => {onChangeData(e, 'email')}}
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-[#5258b0] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 ">
              Текст обращения
              </label>
              <div className="mt-2">
                <textarea
                  value={formData.text}
                  id="text"
                  name="text"
                  autoComplete="text"
                  onChange={(e) => {onChangeData(e, 'text')}}
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset text-black ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-[#5258b0] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </form>
  )
}