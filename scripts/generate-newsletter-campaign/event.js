module.exports = ({to, avatar, title, date, city}) => `
  <a
    style="text-decoration: none;"
    href="https://amplify.aws/community/${to}"
  >
    <table
      width="290"
      align="right"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="devicewidth"
      bgcolor="#fff"
      st-sortable="2columns"
      style="box-shadow: rgb(204, 204, 204) 0.125rem 0.125rem 0px 0.125rem; border-radius: 4px; font-family: lato;"
    >
      <tr>
        <td width="43" style="padding: 30px 24px;">
          <img
            width="43px"
            height="43px"
            src="https://amplify.aws${avatar}"
            alt=""
            border="0"
            style="display:block; outline:none; text-decoration:none; border: 1px solid rgb(233, 233, 233); border-radius: 50%;"
          />
        </td>
        <td>
          <table>
            <tr>
              <td style="font-size: 16px; color: #000;">
                ${title}
              </td>
            </tr>
            <tr>
              <td style="font-size: 12px; color: rgb(162, 162, 162);">
                <b style="color: rgb(130, 130, 130);">${date}</b> in
                <b style="color: rgb(130, 130, 130);">${city}</b>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </a>

  <table>
    <tr>
        <td width="100%" height="20"></td>
    </tr>
  </table>
`;
