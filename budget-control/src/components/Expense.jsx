import React from 'react'
import { formatDate } from '../helpers'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

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
    meal : IconMeat,
    miscellaneous : IconExpenses,
    leisure : IconLeisure,
    health : IconHealth,
    subscriptions : IconSuscriptions,
};


const Expense = ({expense, setEditExpenses}) => {
  const { category,name, amount, id, date } = expense

  const leadingActions = () => (
    <LeadingActions>
        <SwipeAction onClick={() =>setEditExpenses(expense)}>
            Editar
        </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
        <SwipeAction onClick={() => console.log('Eliminar')}>
            Eliminar
        </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
        >
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
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense
