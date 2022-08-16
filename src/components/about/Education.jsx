


import React from 'react'
import './Education.css'

const Education = () => {
  return <table className="table">
    <thead>
        <tr>
            <th>Degree</th>
            <th>Department</th>
            <th>Institute</th>
            <th>Year</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Boot Camp</td>
            <td>Junior Software Dev</td>
            <td>Generation Thailand</td>
            <td>2022-Present</td>
        </tr>
        <tr>
            <td>B.Sc.</td>
            <td>Nautical Science</td>
            <td>Merchant Marine Training Centre</td>
            <td>2014-2018</td>
        </tr>
        <tr>
            <td>High School</td>
            <td>Science,Mathematics Program</td>
            <td>Singsamut school</td>
            <td>2011-2013</td>
        </tr>
    </tbody>
  </table>
}

export default Education
