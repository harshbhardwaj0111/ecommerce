function Timetable(props)
{
    return(
        <div>
             <h2 className='pageContent'>{props.name}</h2>
            <table align="center" cellpadding="10" cellspacing="0" className='tab1' border="5">
                <tbody>
<tr><th>Sr. Number</th><th>Timing</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thrusday</th><th>Friday</th><th>Saturday</th></tr>
<tr><td></td><td>7:10-7:30</td><td colspan="6" align="center"><b><font face="Lucida Handwriting">........PRAYER........</font></b></td></tr>
<tr><td align="center">1</td><td>7:30-8:00</td><td>Hindi</td><td>Hindi</td><td>Hindi</td><td>Hindi</td><td>Hindi</td><td>Hindi</td></tr>
<tr><td align="center">2</td><td>8:00-8:35</td><td>W.E.</td><td>P.T.</td><td>Maths</td><td>Marathi</td><td>S.S.T.</td><td>Marathi</td></tr>
<tr><td align="center">3</td><td>8:35-9:10</td><td>Maths</td><td>Library</td><td>English</td><td>Maths</td><td>Maths</td><td>Science</td></tr>
<tr><td align="center">4</td><td>9:10-9:45</td><td>English</td><td>Science</td><td>Computer</td><td>Science</td><td>Science</td><td>Computer</td></tr>
<tr><td></td><td>9:45-10:05</td><td colspan="6" align="center"><b><font face="Lucida Handwriting">..........LUNCH BREAK..........</font></b></td></tr>
<tr><td align="center">5</td><td>10:05-10:45</td><td>Science</td><td>Marathi</td><td>Maths</td><td>Act</td><td>Marathi</td><td>P.T.</td></tr>
<tr><td align="center">6</td><td>10:45-11:20</td><td>Science</td><td>Maths</td><td>Science</td><td>Act</td><td>English</td><td>English</td></tr>
<tr><td align="center">7</td><td>11:20-11:55</td><td>Marathi</td><td>S.S.T</td><td>Drawing</td><td>S.S.T.</td><td>English</td><td>Maths</td></tr>
<tr><td align="center">8</td><td>11:55-12:25</td><td>S.S.T.</td><td>English</td><td>S.S.T.</td><td>C.C.A.</td><td>Drawing</td><td>S.S.T.</td></tr>
<tr><td></td><td>12:25-12:30</td><td colspan="6" align="center"><b><font face="Lucida Handwriting">..........VANDE MATARAM..........</font></b></td></tr>
<tr><td colspan="8" align="center"><b>Students should wear P.T. uniform on Friday & Saturady</b></td></tr>
</tbody>
</table> 
        </div>
    )
}


export default Timetable;