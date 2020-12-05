import React from 'react'

export const LinkCard = ({link}) => {
  return (
    <>
      <h2>Ссылка</h2>
      <p>Сокращенная ссылка: <a target="_blank" href={link.to} rel="noopener noreferrer">{link.to}</a></p>
      <p>Куда ведет <a target="_blank" href={link.to} rel="noopener noreferrer">{link.from}</a></p>
      <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
      <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
  )
}
