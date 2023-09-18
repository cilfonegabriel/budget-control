import React from 'react'
import { formatDate } from '../helpers'

import IconSaving from '../img/icono_ahorro.svg'
import IconHouse from '../img/icono_casa.svg'
import IconMeat from '../img/icono_comida.svg'
import IconExpenses from '../img/icono_gastos.svg'
import IconLeisure from '../img/icono_ocio.svg'
import IconHealth from '../img/icono_salud.svg'
import IconSuscriptions from '../img/icono_suscripciones.svg'

const dictionaryIcons = {
    saving : IconSaving,
    house : IconHouse,
    meat : IconMeat,
    expenses : IconExpenses,
    leisure : IconLeisure,
    health : IconHealth,
    suscriptions : IconSuscriptions,
};

const Expense = ({expense}) => {
  const { category,name, amount, id, date } = expense
  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <img 
            src={dictionaryIcons[category]} 
            alt="Icon expenses" 
        />
        <div className='descripcion-gasto'>
            <p className='categoria'>{category}</p>
            <p className='nombre-gasto'>{name}</p>
            <p className='fecha-gasto'>
                Add to: {''}
                <span>{formatDate(date)}</span>
            </p>
        </div>
      </div>
      <p className='cantidad-gasto'>${amount}</p>
    </div>
  )
}

export default Expense
