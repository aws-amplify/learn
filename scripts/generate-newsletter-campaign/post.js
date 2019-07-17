module.exports = ({
  href,
  title,
  description,
  author_to,
  author_name,
  author_handle,
  author_avatar,
}) => `
  <a style="text-decoration: none;" href="${href}">
    <table
      width="290"
      align="right"
      class="devicewidth"  
      bgcolor="#fff"
      cellspacing="0"
      border="0"
      st-sortable="2columns"
      style="box-shadow: rgb(204, 204, 204) 2px 2px 0px 2px; border-radius: 4px; background-color: rgb(75, 97, 137); font-family: lato;"
    >
      <tr>
        <td>
          <table>
            <tr>
              <td align="right" style="padding: 8px;">
                <img
                  src="https://www.google.com/s2/favicons?domain=${href}"
                />
              </td>
            </tr>
            <tr>
              <td
                style="padding: 0px 16px; font-size: 30px; line-height: 45px; font-weight: 700; color: #fff;"
              >
                ${title}
              </td>
            </tr>
            <tr>
              <td
                style="padding: 24px 16px; font-size: 13px; line-height: 19.5px; color: #fff;"
              >
                ${description}
              </td>
            </tr>

            <tr>
              <td>
                <a
                  style="display: block; text-decoration: none;"
                  href="https://amplify.aws/community/${author_to}"
                >
                  <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    st-sortable="2columns"
                  >
                    <tr>
                      <td>
                        <table style="width: 100%;">
                          <tr>
                            <td align="right" style="text-align: right; font-size: 16px; color: #fff;">
                              ${author_name}
                            </td>
                          </tr>
                          <tr>
                            <td align="right" style="text-align: right; font-size: 12px; color: #fff;">
                              @${author_handle}
                            </td>
                          </tr>
                        </table>
                      </td>
                      <td width="43" style="padding: 24px 24px 24px 12px;">
                        <img
                          src="https://amplify.aws${author_avatar}"
                          alt=""
                          border="0"
                          style="display:block; outline:none; text-decoration:none; border: 1px solid rgb(233, 233, 233); border-radius: 50%;"
                        />
                      </td>
                    </tr>
                  </table>
                </a>
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
