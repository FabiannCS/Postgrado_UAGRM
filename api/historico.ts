import { gql } from "@apollo/client";


export const LIST_HISTORICOS = gql`
  query ListHistoricos {
    listHistoricos {
      id
      idEstudiante {
        id
        idPersona {
          nombres
          apellidos
        }
      }
      idOfertaModulo {
        id
        grupo
      }
      idOfertaEdicion {
        id
        edicion
      }
      idMateria {
        id
        nombre
      }
      idOrigen
      idGrupo
      estadoNotaId {
        id
        nombre
      }
      nota
      activo
    }
  }
`;

export const GET_HISTORICO = gql`
  query GetHistorico($id: ID!) {
    getHistorico(id: $id) {
      id
      nota
      idGrupo
      idOfertaModulo {
        grupo
      }
      idOfertaEdicion {
        edicion
      }
      idMateria {
        nombre
        sigla
      }
      estadoNotaId {
        id
        nombre
      }
      idEstudiante {
        id
        idPersona {
          nombres
          apellidos
        }
      }
    }
  }
`;

export const GET_HISTORICO2 = gql`
  query ListHistoricos {
    listHistoricos {
      id
      idEstudiante {
        id
        idPersona {
          nombres
          apellidos
        }
      }
      idOfertaModulo {
        id
        grupo
        fechaIni
        fechaFin
      }
      idOfertaEdicion {
        id
        edicion
        idOfertaCarrera {
          idPlanFormacion {
            codigo
            totalCr
          }
        }
        fechaIni
        fechaFin
      }
      idMateria {
        id
        nombre
      
        
      }
      idOrigen
      idGrupo
      estadoNotaId {
        id
        nombre
      }
      nota
      activo
    }
  }
  `;


export const GET_HISTORICOS_BY_MATRICULA2 = gql`
query($idMatricula: ID!) {
  listHistoricos(idMatricula: $idMatricula) {
    id
    idEstudiante {
      id
      idPersona {
        nombres
        apellidos
      }
    }
    idOfertaModulo {
      id
      grupo
      fechaIni
      fechaFin
    }
    idOfertaEdicion {
      id
      edicion
      fechaIni
      fechaFin
      idOfertaCarrera {
        idPlanFormacion {
          codigo
          totalCr
        }
      }
    }
    idMateria {
      id
      nombre
      sigla
      version
      ht
      hp
    }
    idOrigen
    idGrupo
    estadoNotaId {
      id
      nombre
    }
    nota
    activo
  }
}
`;