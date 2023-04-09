import React, { useState } from "react";
import Article from "./components/Article";
// import { Component } from "react";

function App() {

  const EN = {
  titleName: 'NVIDIA NEWS',
  description_name: 'NVIDIA Accelerated AI on Azure',
  description: 'Article description:',
  preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
  content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
  author: 'Author: Mike',
  published: 'Published: 06.12.2022',
  theme: 'Theme: Video cards',
  mark_as_read: 'Mark as read',
  btn_read: 'Read',
  btn_read_close: 'Close',
  mark_as_unread: 'Mark as unread',
  current_lang: 'EN',
}
const UA = {
  titleName: 'НОВИНИ NVIDIA',
  description_name: 'Прискорений штучний інтелект NVIDIA в Azure',
  description: 'Опис статті:',
  preview: 'NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.',
  content: 'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
  author: 'Автор: Майк',
  published: 'Опубліковано: 06.12.2022',
  theme: 'Тема: відео карти',
  mark_as_read: 'Прочитано',
  btn_read: 'Читати',
  btn_read_close: 'Закрити',
  mark_as_unread: 'Не прочитано',
  current_lang: 'UA'
}

  const [lang, setLang] = useState(EN);
  const [isShow, setIsShow] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const changeLang = (newLang) => {
    setLang(newLang);
  }

  const toggleArticle = () => {
    setIsShow(!isShow);
      const articleBody = document.querySelector('.article__body');
    if (!isShow) {
      console.log(isReady);
      if (isReady) {
        articleBody.classList.remove('read');
      }
    } else if (isShow && isReady) {
        articleBody.classList.add('read');
    }
  }

  const markAsRead = () => {
    if (!isShow) {
      setIsReady(true);
      const articleBody = document.querySelector('.article__body');
      articleBody.classList.add('read');
    }
  }

  const markAsUnread = () => {
    const articleBody = document.querySelector('.article__body');
    articleBody.classList.remove('read');
    setIsReady(false);
  }

  return (
    <div className="wrapper">
      <h1 className="title">{lang.titleName}</h1>
      <div className="article">
        <Article show={isShow} lang = {lang}>
          <div className="article__title">
            <h2>{lang.description_name}</h2>
          </div>
        </Article>
        <div className="article__actions">
          <button onClick={markAsRead} className="article__btn">{lang.mark_as_read}</button>
          <button onClick={toggleArticle} className="article__btn">{!isShow ? lang.btn_read : lang.btn_read_close}</button>
          <button onClick={markAsUnread} className="article__btn">{lang.mark_as_unread}</button>
        </div>
      </div>
      <div className="lang">
        <button class = 'lang-btn' onClick={() => changeLang(EN)}>EN</button>
        <button class = 'lang-btn' onClick={() => changeLang(UA)}>UA</button>
      </div>
    </div> 
  );
}

export default App;
