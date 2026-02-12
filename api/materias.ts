import { gql } from "@apollo/client";

export const GET_MATERIAS = gql`
  query GetMaterias {
    listMateriass {
      id
      idPlanFormacion { id nombre version }
      nombre
      sigla
      version
      ht
      hp
      cr
      tipoOe { id nombre }
      tipoSa { id nombre }
      tipoAsignatura{ id nombre }
      nsa
      mencion
      estado
      activo
    }
  }
`;

export const GET_MATERIAS_BY_PLAN2 = gql`
  query GetMateriasByPlan($idPlanFormacion: ID!) {
    listMateriass(idPlanFormacion: $idPlanFormacion) {
      id
      idPlanFormacion {
        id
        nombre
        version
      }
      nombre
      sigla
      version
      ht
      hp
      cr
      tipoOe {
        id
        nombre
      }
      tipoSa {
        id
        nombre
      }
      tipoAsignatura{
        id
        nombre
      }
      nsa
      mencion
      estado
      activo
    }
  }
`;

export const GET_METADATA_MATERIA = gql`
  query GetMetadataMateria {
    selectMetadata(model: "Materias")
  }
`;

export const GET_PLANES_FORMACION = gql`
  query GetPlanesFormacion {
    planesFormacion {
      id
      nombre
      version
      codigo
      activo
    }
  }
`;


export const GET_MATERIA_BY_ID = gql`
  query GetMateriaById($id: ID!) {
    getMaterias(id: $id) {
      id
      idPlanFormacion {
        id
        nombre
        version
      }
      nombre
      sigla
      version
      ht
      hp
      cr
      tipoOe {
        id
        nombre
      }
      tipoSa {
        id
        nombre
      }
      tipoAsignatura{
        id
        nombre
      }
      nsa
      mencion
      estado
      activo
    }
  }
`;


export const GET_MATERIAS_BY_PLAN = gql`
  query GetMateriasByPlan($idPlanFormacion: ID!) {
    listMateriass(idPlanFormacion: $idPlanFormacion, activo: true) {
      id
      idPlanFormacion {
        id
        nombre
        version
      }
      nombre
      sigla
      version
      ht
      hp
      cr
      tipoOe {
        id
        nombre
      }
      tipoSa {
        id
        nombre
      }
      tipoAsignatura{
        id
        nombre
      }
      nsa
      mencion
      estado
      activo
    }
  }
`;