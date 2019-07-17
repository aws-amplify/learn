module.exports = (heading, data) =>
  data.length
    ? `
        <table
          width="100%"
          bgcolor="#f2f2f2"
          cellspacing="0"
          border="0"
          id="backgroundTable"
          st-sortable="2columns"
        >
          <tbody>
            <tr>
              <td style="font-size: 24px; padding: 30px; text-align: center;">${heading}</td>
            </tr>
            <tr>
              <td>
                <table
                  width="600"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  align="center"
                  class="devicewidth"
                >
                  <tbody>
                    <tr>
                      <td width="100%">
                        <table
                          bgcolor="#f2f2f2"
                          width="600"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          align="center"
                          class="devicewidth"
                        >
                          <tbody>
                            <tr>
                              <td>
                                ${data}
                              </td>
                            </tr>
                            <tr>
                              <td width="100%" height="10"></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      `
    : '';
