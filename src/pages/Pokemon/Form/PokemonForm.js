import React, { memo, useMemo, useCallback } from 'react'

import { useParams, useHistory } from 'react-router-dom'

import { useQuery, useMutation } from '@apollo/react-hooks'

import { Formik, Form, Field, FieldArray } from 'formik'
import * as Yup from 'yup'

import { faIdBadge, faTags, faTrash, faPlus, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useViewport } from '../../../hooks/Viewport'

import { Button } from '../../../components/Button/Button'
import { Container } from '../../../components/Container'
import { FormLegend } from '../../../components/FormLegend/FormLegend'
import { Grid, Row, Col } from '../../../components/Grid'
import { Image } from '../../../components/Image'
import { InputField } from '../../../components/InputField/InputField'
import { Loading } from '../../../components/Loading'
import { Title } from '../../../components/Title/Title'

import { GET_POKEMON_BY_ID } from '../../../api/query'
import { UPDATE_POKEMON } from '../../../api/mutation'
import { COLORS } from '../../../constants'

const PokemonForm = memo(() => {
  const { id } = useParams()
  const { isSmall } = useViewport()

  const history = useHistory()

  const { data: { pokemon } = {}, loading } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id },
  })

  const [mutate] = useMutation(UPDATE_POKEMON, {
    variables: { pokemonId: id },
  })

  const validationSchema = useMemo(() => {
    return Yup.object({
      name: Yup.string().required('Informe o nome!'),
      image: Yup.string(),
      types: Yup.array().of(Yup.string().required('Informe o tipo')),
    })
  }, [])

  const handleSubmit = useCallback(
    async (values, formik) => {
      await mutate({ variables: { pokemon: values } })

      formik.setSubmitting(false)

      history.goBack()
    },
    [history, mutate]
  )

  return (
    <>
      {loading && <Loading />}
      {!loading && pokemon && (
        <Container>
          <Title title="Editar Pokémon" />

          <Formik onSubmit={handleSubmit} initialValues={pokemon} validationSchema={validationSchema}>
            {({ values, isSubmitting, isValid }) => (
              <Form noValidate>
                <Grid>
                  <Container size={1} justifyContent="center" alignItems="center">
                    <Image src={values.image} size="100px" />
                  </Container>

                  <Row>
                    <Col size={1}>
                      <FormLegend icon={faIdBadge} title="Identificação" subtitle="Dados de identificação" />
                    </Col>
                  </Row>

                  <Row flexDirection={isSmall ? 'column' : 'row'} width={isSmall ? 'max-content' : '100%'}>
                    <Col size={1} margin={isSmall ? '20px 10px' : '10px 20px'}>
                      <Field name="name" label="Nome" disabled={isSubmitting} component={InputField} required />
                    </Col>

                    <Col size={1} margin={isSmall ? '20px 10px' : '10px 20px'}>
                      <Field name="image" label="Url imagem" disabled={isSubmitting} component={InputField} />
                    </Col>
                  </Row>

                  <Row>
                    <Col size={1}>
                      <FormLegend icon={faTags} title="Tipos" subtitle="Tipos do pokémon" />
                    </Col>
                  </Row>

                  <FieldArray
                    name="types"
                    render={(arrayHelpers) => (
                      <>
                        <Row>
                          <Col size={1}>
                            <Button
                              type="button"
                              onClick={() => arrayHelpers.push('')}
                              prefix={<FontAwesomeIcon icon={faPlus} size="1x" swapOpacity />}
                              text="Adicionar"
                              disabled={isSubmitting}
                              outline
                            />
                          </Col>
                        </Row>

                        {values.types &&
                          values.types.map((_, index) => (
                            <Row key={index}>
                              <Col size={1}>
                                <Field name={`types[${index}]`} disabled={isSubmitting} component={InputField} />
                              </Col>
                              <Col size="none">
                                <Button
                                  type="button"
                                  prefix={<FontAwesomeIcon icon={faTrash} size="1x" swapOpacity />}
                                  backgroundColor={COLORS.red}
                                  onClick={() => arrayHelpers.remove(index)}
                                  disabled={isSubmitting}
                                  outline
                                />
                              </Col>
                            </Row>
                          ))}
                      </>
                    )}
                  />

                  <Row flexDirection={isSmall ? 'column-reverse' : 'row'} alignItems={isSmall ? 'center' : 'flex-end'}>
                    <Col size={1}>
                      <Button
                        type="button"
                        prefix={<FontAwesomeIcon icon={faTimes} size="1x" swapOpacity />}
                        disabled={isSubmitting || !isValid}
                        backgroundColor={COLORS.lightGrey}
                        color={COLORS.mediumGrey}
                        text="Cancelar"
                        width="150px"
                        onClick={() => history.push('/pokemon')}
                      />
                    </Col>

                    <Col size={1}>
                      <Container flexDirection="row" justifyContent="flex-end">
                        <Button
                          type="submit"
                          prefix={
                            isSubmitting ? (
                              <Loading size="1x" />
                            ) : (
                              <FontAwesomeIcon icon={faCheck} size="1x" swapOpacity />
                            )
                          }
                          disabled={isSubmitting || !isValid}
                          text="Salvar"
                          width="150px"
                        />
                      </Container>
                    </Col>
                  </Row>
                </Grid>
              </Form>
            )}
          </Formik>
        </Container>
      )}
    </>
  )
})

export default PokemonForm
