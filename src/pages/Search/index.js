import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Card from '../../components/Card';
import DataContent from './DataContent';

import { Wrapper, CepInput, DataGrid, Location } from './styles';

import { getCepData } from '../../services/cep';
import {
  population,
  pib,
  idh,
  homicidios,
  taxaAbandono,
  leitosSus,
} from '../../data/statistics';

const Search = () => {
  const [cep, setCep] = useState('');
  const [cepData, setCepData] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (!cep) {
        setCepData();
        return;
      }

      const formatedCep = cep.replace(/[^0-9 ]/g, '');
      setLoading(true);
      try {
        const res = await getCepData(formatedCep);
        const { data } = res;
        setCepData(data);
      } catch (err) {
        toast.error('CEP Inválido');
      } finally {
        setLoading(false);
      }
    },
    [cep]
  );

  const overallIndex = useCallback((data) => {
    let totalState = 0;
    let totalCity = 0;
    data.forEach((year) => {
      totalState += year.state;
      totalCity += year.city;
    });

    return totalCity - totalState;
  }, []);

  const populationIndex = useCallback(() => {
    const lastIndex = population.length - 1;
    const lastYear = population[lastIndex];
    const yearBefore = population[lastIndex - 1];
    return lastYear.city - yearBefore.city;
  }, []);

  return (
    <Wrapper>
      <CepInput onSubmit={handleSubmit}>
        <input
          id='cepinput'
          type='text'
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder='Digite o CEP'
        />
        <FontAwesomeIcon icon={faSearch} onClick={handleSubmit} />
      </CepInput>

      {cepData && !loading && (
        <>
          <Location>{cepData.localidade}</Location>
          <DataGrid>
            <Card>
              <DataContent
                title='População'
                yearsData={population}
                overallVariation={populationIndex}
              ></DataContent>
            </Card>
            <Card>
              <DataContent title='PIB per capita' yearsData={pib}></DataContent>
            </Card>
            <Card>
              <DataContent
                title='IDH'
                yearsData={idh}
                overallVariation={overallIndex}
              ></DataContent>
            </Card>
            <Card>
              <DataContent
                title='Homicídio'
                yearsData={homicidios}
                overallVariation={overallIndex}
                subtitle='(Por 100 Mil Hab.)'
              ></DataContent>
            </Card>
            <Card>
              <DataContent
                title='Taxa de Abandono'
                yearsData={taxaAbandono}
                subtitle='(Ensino Médio)'
              ></DataContent>
            </Card>
            <Card>
              <DataContent
                title='Leito do SUS'
                yearsData={leitosSus}
                subtitle='(Por 100 Mil Hab.)'
              ></DataContent>
            </Card>
          </DataGrid>
        </>
      )}
      {loading && (
        <FontAwesomeIcon icon={faSpinner} spin style={{ 'align-self': 'center' }} />
      )}
    </Wrapper>
  );
};

export default Search;
