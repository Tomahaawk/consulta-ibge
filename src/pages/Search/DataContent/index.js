import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Wrapper, Title, Subtitle, TableCell } from './styles';

const DataContent = ({ title, yearsData, overallVariation, subtitle }) => {
  const validateNumbers = useCallback((data) => {
    return data.city - data.state;
  }, []);

  const arrowIcon = useCallback(
    (data) => {
      if (validateNumbers(data) > 0) {
        return <FontAwesomeIcon icon={faChevronUp} />;
      }
      if (validateNumbers(data) < 0) {
        return <FontAwesomeIcon icon={faChevronDown} />;
      }
      return null;
    },
    [validateNumbers]
  );

  return (
    <Wrapper>
      <Title diff={overallVariation(yearsData)}>
        {title}
        <Subtitle>{subtitle}</Subtitle>
      </Title>
      <table>
        <thead>
          <tr>
            <th>Ano</th>
            <th>Estado</th>
            <th>Municipio</th>
          </tr>
        </thead>
        <tbody>
          {yearsData.map((data) => (
            <tr key={data.year}>
              <TableCell width='33.33%'>{data.year}</TableCell>
              <TableCell width='33.33%'>{data.state}</TableCell>
              <TableCell width='33.33%' diff={validateNumbers(data)}>
                <div>
                  <span>{data.city}</span>
                  {arrowIcon(data)}
                </div>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

DataContent.propTypes = {
  title: PropTypes.string.isRequired,
  yearsData: PropTypes.arrayOf(PropTypes.any),
  overallVariation: PropTypes.func,
};

DataContent.defaultProps = {
  yearsData: [],
  overallVariation: () => 0,
};

export default DataContent;
