![Mind Logo](https://uploads-ssl.webflow.com/5e94eacec7d8c21e2cbbe093/616f539cc4710faaaab29c20_mind-home_Logo-06.svg)

# Mind Team Challenge

<details>
  <summary>Intrucciones</summary>
  <ol>
    <li>
      Contruir un Docker con las herramientas y configuraciones
    </li>
    <li>
      Configurar una base de datos (SQL, MySql, Mongo)
    </li>
    <li>
     <details>
      <summary>Contruir un Web API RestFul (Net Core, Node, PHP)</summary>
      <ul>
        <li>
          Implementar documentacion (Swagger/OpenAPI)
        </li>
        <li>
          Implementar versionado del API
        </li>
        <li>
          Implementar seguridad JWT
        </li>
        <li>
          Implementar un Log de errores
        </li>
      </ul>
     </details>
    </li>
    <li>
      <details>
        <summary>
          Construir Unit Test
        </summary>
        <ul>
          <li>Integrar herramienta de code coverage para el avance</li>
        </ul>
      </details>
    </li>
    <li>Implementar ORM si el modelo de Base de datos lo permite</li>
    <li>
      <details>
        <summary>
          Contruir un FrontEnd con una de las siguientes opciones (React, Angular, Vue, React Native, Android, IOS)
        </summary>
        <ul>
          <li>
            Integrar validaciones en los campos (Campos vacios o nulos)
          </li>
          <li>
           Integrar validaciones en los campos (Campos vacios o nulos)
          </li>
          <li>
           Integrar notificaciones de confirmacion (Alertas al guardar, eliminar)
          </li>
        </ul>
      </details>
    </li>
    <li>
      Se requiere entregar en un repositiorio git el resultado de la implementacion
    </li>
    <li>
      Evitar manejo de variables fijas en el código(Configurarlas en algun archivo general y documentadas)
    </li>
  </ol>
</details>
<details>
  <summary>Requerimientos</summary>
    <ul>
      <details>
        <summary>
          Historias (Funcionalidad)
        </summary>
        <ul>
          <li>Inicio de sesión</li>
          <li>Cerrar sesión</li>
          <li>
            <details>
              <summary>Manejo de roles</summary>
              <ul>
                <li>
                    <details>
                      <summary>Super user(Se crea directo en la base de datos)</summary>
                      <ul>
                        <li>Este usuario puede dar de alta admins o usuarios normales</li>
                      </ul>
                    </details>
                </li>
                <li>
                  Admin
                </li>
                <li>
                  Usuario normal
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
      <details>
        <summary>
          Role Admin y superAdmin puede hacer la siguientes tareas
        </summary>
        <ul>
          <li>
              <details>
                <summary>Crud de usuarios</summary>
                <ul>
                  <li>Nombre</li>
                  <li>Correo</li>
                  <li>Contraseña encriptada</li>
                </ul>
              </details>
          </li>
          <li>
            <details>
              <summary>Crud de cuentas</summary>
              <ul>
                <li>Nombre de la cuenta</li>
                <li>Nombre del cliente</li>
                <li>Nombre del responsable de operación</li>
                <li>Consulta de equipo</li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Movimiento de personas de los equipos</summary>
              <ul>
                <li>
                  <details>
                    <summary>Debe poder agregar usuarios registrados</summary>
                    <ul>
                      <li>Fecha de inicio</li>
                      <li>Fecha de fin</li>
                      <li>El sistema debe mantener un log de movimientos de las personas</li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
          <details>
              <summary>Consuta log de movimientos de personas entre equipos</summary>
              <ul>
                <li>
                    <details>
                      <summary>Filtro</summary>
                      <ul>
                        <li>Por equipo</li>
                        <li>Por nombre</li>
                        <li>Por fecha de inicio y fecha de fin</li>
                      </ul>
                    </details>
                </li>
              </ul>
            </details>
          </li>
          <li>Consultar información detalle de los usuarios</li>
        </ul>
      </details>
      <details>
        <summary>
          Role usuario normal
        </summary>
        <ul>
          <li>
            <details>
              <summary>
                Solo puede consultar su perfil
              </summary>
              <ul>
                <li>
                  Nombre
                </li>
                <li>
                  Correo (No editable)
                </li>
                <li>
                  Nivel de inglés
                </li>
                <li>
                  Conocimientos técnicos (Campo de texto)
                </li>
                <li>
                  Link de CV(Google Doc) para manejar formato de arkus
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
      <details>
        <summary>Proceso de seguimiento</summary>
        <ul>
          <li>
            <details>
              <summary>
                Se tiene un sprint de 1 semana para realizar esta actividad
              </summary>
              <ul>
                <li>Preparar código en repositorio</li>
                <li>Preparar demo de la implementación</li>
              </ul>
            </details>
          </li>
        </ul>
      </details>
  </ul>
</details>
