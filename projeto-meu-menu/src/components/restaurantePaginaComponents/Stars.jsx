import React, { useState } from 'react';

function Stars({ filhoPraPai, parametro }) {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    switch (parametro) {
      case 1:
        filhoPraPai({ nt_atendimento: value });
        break;
      case 2:
        filhoPraPai({ nt_comida: value });
        break;
      case 3:
        filhoPraPai({ nt_ambiente: value });
        break;
      default:
        break;
    }
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= count; i++) {
      stars.push(
        <li
          key={i}
          className={`star-icon${parametro} ${i <= rating ? 'ativo' : ''}`}
          data-avaliacao={i}
          primary
          onClick={() => handleStarClick(i)}
        ></li>
      );
    }
    return stars;
  };

  let title = '';
  let count = 0;

  switch (parametro) {
    case 1:
      title = 'Atendimento';
      count = 5;
      break;
    case 2:
      title = 'Comida';
      count = 5;
      break;
    case 3:
      title = 'Ambiente';
      count = 5;
      break;
    default:
      break;
  }

  return (
    <div className="modal_avaliacao">
      <div className="titulo_avaliacao_review">{title}</div>
      <div className={`div_starts_review${parametro}`}>
        {renderStars(count)}
      </div>
    </div>
  );
}
export default Stars;