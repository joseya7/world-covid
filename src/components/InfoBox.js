import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './InfoBox.css'
import LineGraph from './LineGraph'
import numeral from 'numeral'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCheck,
  faSmile,
  faSkullCrossbones,
  faGlobeAsia,
} from '@fortawesome/free-solid-svg-icons'

function InfoBox({
  confirmed,
  death,
  recover,
  title,
  flag,
  cases,
  total,
  active,
  isRed,
  country,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--selected'} ${
        confirmed && 'infoBox--red'
      }
      ${death && 'infoBox--black'}`}
    >
      <CardContent>
        <div className="card__header">
          {flag === 'global' || flag === '' ? (
            <FontAwesomeIcon
              icon={faGlobeAsia}
              size="4x"
              style={{ color: '#556B2F', marginRight: '10px' }}
            />
          ) : (
            <div
              className="card-flag"
              style={{ backgroundImage: `url(${flag})` }}
            ></div>
          )}

          <div className="card__header__left">
            <Typography color="textSecondary">
              오늘 <strong>{title}</strong> 수
            </Typography>
            <h2
              className={`infoBox__cases ${
                confirmed && 'infoBox__cases--red'
              } ${recover && 'infoBox__cases--green'}
              ${death && 'infoBox__cases--black'}
              `}
            >
              +{cases}
            </h2>
          </div>
          <div className="card__header__right">
            {confirmed && (
              <FontAwesomeIcon
                icon={faUserCheck}
                size="3x"
                style={{ color: 'red' }}
              />
            )}
            {!isRed && (
              <FontAwesomeIcon
                icon={faSmile}
                size="3x"
                style={{ color: 'greenyellow' }}
              />
            )}
            {death && (
              <FontAwesomeIcon
                icon={faSkullCrossbones}
                size="3x"
                style={{ color: 'black' }}
              />
            )}
          </div>
        </div>

        <Typography
          className="infoBox__total"
          color="textSecondary"
          align="right"
        >
          전체 {numeral(total).format('0,0')}명
        </Typography>

        <LineGraph
          casesType={`${
            confirmed ? 'cases' : recover ? 'recovered' : 'deaths'
          }`}
          country={country}
        />
      </CardContent>
    </Card>
  )
}

export default InfoBox
