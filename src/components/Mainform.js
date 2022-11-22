import 'bootstrap/dist/css/bootstrap.min.css';
import './Mainform.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Cal from './calendar.png';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const Mainform = (props) => {

    const navigate = useNavigate();
    return(
        <div className="mainform">
      
      {/* Top batch of buttons */}
      <Col className='topbutton'>
        <Button className='answerrecordsearch' sm='10' variant='secondary' size='sm' onClick={() =>navigate('/secondform')}>Answer&nbsp;Record&nbsp;Search</Button>
        <Button className='repairslipsearch' sm='10' variant='secondary' size='sm' onClick={() =>navigate('/thirdform')}>Repair&nbsp;Slip&nbsp;Search</Button>
        <Button className='attachment' sm='10' variant='secondary' size='sm' disabled>Attachment</Button>
        <Button className='registration' sm='10' variant='secondary' size='sm'>Registration</Button>  
      </Col>

      {/* Bottom batch of buttons */}
      <Col className='bottombutton'>
        <Button className='newreception' sm='10' variant='secondary' size='sm'>New&nbsp;Reception</Button>
        <Button className='bottomcorres' sm='10' variant='secondary' size='sm'>Correspondence</Button>
        <Button className='repairrecep' sm='10' variant='secondary' size='sm'>Repair&nbsp;Reception</Button>
        <Button className='close' sm='10' variant='secondary' size='sm' onClick={() =>navigate(-1)}>Close</Button>  
      </Col>

      <h1 className='main'>Registration of Response Record</h1>

    <div className='basicInfo'>

      {/* Division 1 for Basic Information fields */}
      <div className='g1'>
        <h1 className='basicinfohead'>Basic Information</h1>

        {/* Reception Code field */}
        <div className='recepcodebg'>
          <Form.Label column sm='2' className='recepcode' >
            Reception&nbsp;Code
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='recepcodefield1' type='text' size='sm'></Form.Control>
            <Form.Control className='recepcodefield2' type='text' size='sm'></Form.Control>
            <Button  as={Col} className='recepcodeacquire' sm='10' variant='secondary' size='sm'>Acquire</Button>
          </Col>
        </div>

        {/* Receptionist field */}
        <div className='receptionistbg'>
         <Form.Label column sm='2' className='receptionist' >
            Receptionist
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='receptionistfield1' type='text' size='sm'></Form.Control>
            <Form.Control className='receptionistfield2' type='text' size='sm'></Form.Control>
          </Col>
        </div>

        {/* Responmdent field */}
        <div className='respondentbg'>
          <Form.Label column sm='2' className='respondent' >
            Respondent
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='respondentfield1' type='text' size='sm'></Form.Control>
            <Form.Control className='respondentfield2' type='text' size='sm'></Form.Control>
          </Col>

          <Button className='respochange' sm='10' variant='secondary' size='sm'>Change</Button>
          <Button className='respoclear' sm='10' variant='secondary' size='sm' disabled>Clear</Button>
        </div>
      </div>

      {/* Division 2 for Basic Information fields */}
      <div className='g1'>

        {/* Status field */}
        <div className='statusbg'>
          <Form.Label column sm='2' className='status' >
            Status
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='dropdown1' placeholder='Select'>
              
              <option value="1">Processing</option>
              <option value="2">Requesting</option>
              <option value="3">Finished</option>
              <option value="4">Revocation</option>
              <option value="5">Folding power does not connect</option>
              <option value="6">Provisional Registration</option>
            </Form.Select>
          </Col>
        </div>

        {/* Completion date and time fields */}
        <div className='cdtbg'>
          <Form.Label column sm='2' className='cdt' >
            Completion&nbsp;Date&nbsp;and&nbsp;Time
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='cdtfield1' type='text' size='sm'></Form.Control>
            <img src={Cal} alt='Calendar Icon' className='calendar-icon1'/>
            <Form.Control className='cdtfield2' type='text' size='sm'></Form.Control>
            <Button  as={Col} className='cdtacquire' sm='10' variant='secondary' size='sm'>Acquire</Button>
            
          </Col>
        </div>

        {/* Reception date and time fields */}
        <div className='rdtbg'>
          <Form.Label column sm='2' className='rdt' >
            Reception&nbsp;Date&nbsp;and&nbsp;Time
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='rdtfield1' type='text' size='sm'></Form.Control>
            <img src={Cal} alt='Calendar Icon' className='calendar-icon2'/>
            <Form.Control className='rdtfield2' type='text' size='sm'></Form.Control>
            <Button  as={Col} className='rdtacquire' sm='10' variant='secondary' size='sm'>Acquire</Button>
          </Col>
        </div>

        {/* Modified date and time fields */}
        <div className='mdtbg'>
          <Form.Label column sm='2' className='mdt' >
            Reception&nbsp;Date&nbsp;and&nbsp;Time
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='mdtfield1' type='text' size='sm'></Form.Control>
            <Form.Control className='mdtfield2' type='text' size='sm'></Form.Control>
          </Col>
        </div>      
      
      </div>
    {/* End of Basic Information division */}
    </div>

    {/* Start of Dealer Information division */}
    <div className='dealerinfo'>

      {/* Division 1 for Dealer Information field */}
      <div className='g1'>
        <h1 className='dealinfohead'> Dealer Information</h1>

        {/* Dealer Tel field */}
        <div className='deltelbg'>
          <Form.Label column sm='2' className='dealerTel' >
            Dealer&nbsp;Tel
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='delfield1' type='text' size='sm' ></Form.Control>
            <Form.Control className='delfield2' type='text' size='sm' ></Form.Control>
          </Col>
          <Button  as={Col} className='dealsearch' sm='10' variant='secondary' size='sm'>Search</Button>
        </div>

        {/* Contact Tel 1 field */}
        <div className='contel1bg'>
          <Form.Label column sm='2' className='conTel1' >
            Contact&nbsp;Tel1
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='contelfield' type='text' size='sm'></Form.Control>
          </Col>
        </div>

        {/* Dealer Name field */}
        <div className='dealernamebg'>
          <Form.Label column sm='2' className='dealname' >
            Dealer&nbsp;Name
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='dealnamefield' type='text' size='sm'></Form.Control>
          </Col>
          <Button  as={Col} className='dealnamesearch' sm='10' variant='secondary' size='sm'>Search</Button>
        </div>

        {/* FAX Answered field */}
        <div className='faxansbg'>
          <Form.Label column sm='2' className='faxansfield' >
            FAX&nbsp;Answered
          </Form.Label>
        </div>

        {/* Fax Radio buttons */}
        <div className='faxradio'>
        <Form.Check
            inline
            label='Yes'
            name='group1'
            type='radio'
            />

            <Form.Check
            inline
            label='No'
            name='group1'
            type='radio'
            />
        </div>

        {/* Dealer Address field */}
        <div className='dealeraddbg'>
          <Form.Label column sm='2' className='dealeradd' >
            Dealer&nbsp;Address
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='dealaddfield' type='text' size='sm'></Form.Control>
          </Col>
          <Button  as={Col} className='dealaddsearch' sm='10' variant='secondary' size='sm'>Search</Button>
        </div>
      </div>


      {/* Division 2 for Dealer Information field */}
      <div className='g1'>
      
        {/* Reseller Code field */}
        <div className='resellercodebg'>
          <Form.Label column sm='2' className='resellercode' >
            Reseller&nbsp;Code
          </Form.Label>
          
          <Col sm='10'>
            <Form.Control className='rescodefield' type='text' size='sm'></Form.Control>
          </Col>
          <Button  as={Col} className='rescodesearch' sm='10' variant='secondary' size='sm'>Search</Button>
          <Button  as={Col} className='dealinfoclear' sm='10' variant='secondary' size='sm'>Clear</Button>
        </div>

        {/* Contact Tel 2 field */}
        <div className='contel2bg'>
          <Form.Label column sm='2' className='contel2' >
            Contact&nbsp;Tel&nbsp;2
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='contel2field' type='text' size='sm'></Form.Control>
          </Col>
        </div>

        {/* Responsible field */}
        <div className='responbg'>
          <Form.Label column sm='2' className='responsible' >
            Responsible
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='responfield' type='text' size='sm'></Form.Control>
          </Col>
        </div>

        {/* Dealer Fax field */}
        <div className='dealfaxbg'>
          <Form.Label column sm='2' className='dealfax' >
            Dealer&nbsp;FAX
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='dealfaxfield' type='text' size='sm'></Form.Control>
          </Col>
          <Button  as={Col} className='dealfaxsearch' sm='10' variant='secondary' size='sm'>Search</Button>
        </div>

        {/* Order Number field */}
        <div className='ordnumbg'>
          <Form.Label column sm='2' className='ordnum' >
            Order&nbsp;Number
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='ordnumfield' type='text' size='sm'></Form.Control>
          </Col>
        </div>

      </div>

    {/* End of Dealer Information div */}
    </div>

    {/* Start of Customer Information fields */}
    <div className='custinfo'>

      {/* Division 1 of Customer Information fields */}
      <div className='g1'>
        <h1 className='custinfohead'> Customer Information</h1>

        {/* Gender field */}
        <div className='genderbg'>
          <Form.Label column sm='2' className='gender' >
            Gender
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='genderdrop' >
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="2">Unknown</option>
            </Form.Select>
          </Col>
        </div>

        {/* Age field */}
        <div className='agebg'>
          <Form.Label column sm='2' className='age' >
            Age
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='agedrop' >
              <option value="1">Young (~20)</option>
              <option value="2">Middle Age (30 ~ 50)</option>
              <option value="3">Old (60~)</option>
              <option value="4">Unknown</option>
            </Form.Select>
          </Col>
        </div>

        {/* Area field */}
        <div className='areabg'>
          <Form.Label column sm='2' className='area' >
            Area
          </Form.Label>

          <Button className='custinfoclear' sm='10' variant='secondary' size='sm'>Clear</Button>

          <Col  sm="10">
            <Form.Select aria-label="Default" className='areadrop'>
              <option value="1">Hokkaido</option>
              <option value="2">Aomori</option>
              <option value="3">Iwate</option>
              <option value="4">Miyagi</option>
              <option value="5">Akita</option>
              <option value="6">Yamagata</option>
              <option value="7">Fukushima</option>
              <option value="8">Ibaraki</option>
              <option value="9">Tochigi</option>
              <option value="10">Gunma</option>
              <option value="11">Saitama</option>
              <option value="12">Chiba</option>
              <option value="13">Tokyo</option>
              <option value="14">Kanagawa</option>
              <option value="15">Niigata</option>
              <option value="16">Toyama</option>
              <option value="17">Ishikawa</option>
              <option value="18">Fukui</option>
              <option value="19">Yamanashi</option>
              <option value="20">Nagano</option>
              <option value="21">Gifu</option>
              <option value="22">Shizuoka</option>
              <option value="23">Aichi</option>
              <option value="24">Mie</option>
              <option value="25">Shiga</option>
              <option value="26">Kyoto</option>
              <option value="27">Osaka</option>
              <option value="28">Hyogo</option>
              <option value="29">Nara</option>
              <option value="30">Wakayama</option>
              <option value="31">Tottori</option>
              <option value="32">Shimane</option>
              <option value="33">Okayama</option>
              <option value="34">Hiroshima</option>
              <option value="35">Yamaguchi</option>
              <option value="36">Tokushima</option>
              <option value="37">Kagawa</option>
              <option value="38">Ehime</option>
              <option value="39">Kochi</option>
              <option value="40">Fukuoka</option>
              <option value="41">Saga</option>
              <option value="42">Nagasaki</option>
              <option value="43">Kumamoto</option>
              <option value="44">Oita</option>
              <option value="45">Miyazaki</option>
              <option value="46">Kagoshima</option>
              <option value="47">Okinawa</option>
              <option value="48">North America</option>
              <option value="49">Europe</option>
              <option value="50">Asia/Oceania</option>
              <option value="51">South America</option>
              <option value="52">Africa</option>
              <option value="53">Middle East</option>
              <option value="54">Others</option>
              <option value="55">Unknown</option>
            </Form.Select>
          </Col>
        </div>

        {/* Relation field */}
        <div className='relationbg'>
          <Form.Label column sm='2' className='relation' >
            Relation
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='relationdrop' >
              <option value="1">Myself</option>
              <option value="2">Person Concerned</option>
              <option value="3">Involved Organization</option>
            </Form.Select>
          </Col>
        </div>

        {/* Institutional Classification field */}
        <div className='icbg'>
          <Form.Label column sm='2' className='ic' >
            Institutional&nbsp;Classification
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='icdrop' >
              <option value="1">Consumer Affairs Center</option>
              <option value="2">Firefighting</option>
              <option value="3">Police</option>
              <option value="4">National Life Center</option>
              <option value="5">Japan Consunmers Association</option>
              <option value="6">Ministry of Economic, Trade and Industry</option>
              <option value="7">NITE</option>
              <option value="8">Home Appliances PL Center</option>
              <option value="9">Gas Oil PL Center</option>
              <option value="10">Others</option>
            </Form.Select>
          </Col>
        </div>

        {/* Type of Customer field */}
        <div className='tocbg'>
          <Form.Label column sm='2' className='toc' >
            Type&nbsp;of&nbsp;Customer
          </Form.Label>

          <Col  sm="10">
            <Form.Select aria-label="Default" className='tocdrop'>
              <option value="1">So so</option>
              <option value="2">Store</option>
              <option value="3">Toshiba Personnel</option>
              <option value="4">Government</option>
              <option value="5">Builders</option>
              <option value="6">Property Management</option>
              <option value="7">Electric Power Company</option>
              <option value="8">Others</option>
            </Form.Select>
          </Col>
        </div>

        {/* Customer Name (Katakana) field */}
        <div className='custnamekanabg'>
          <Form.Label column sm='2' className='custnamekana' >
            Customer&nbsp;Name&nbsp;(Katakana)
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='custnamekanafield' type='text' />
          </Col>
        </div>

        {/* Company Name (Katakana) field */}
        <div className='compnamekanabg'>
          <Form.Label column sm='2' className='compnamekana' >
            Company&nbsp;Name&nbsp;(Katakana)
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='compnamekanafield' type='text' />
          </Col>
        </div>

        {/* Sales rep field */}
        <div className='salesrepbg'>
          <Form.Label column sm='2' className='salesrep' >
            Sales&nbsp;Rep
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='salesrepfield' type='text' />
          </Col>
        </div>


        {/* Customer name (Kanji) field */}
        <div className='custnamekanjibg'>
          <Form.Label column sm='2' className='custnamekanji' >
            Customer&nbsp;Name&nbsp;(Kanji)
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='custnamekanjifield' type='text' ></Form.Control>
          </Col>
        </div>

        {/* Company name (Kanji) field */}
        <div className='compnamekanjibg'>
          <Form.Label column sm='2' className='compnamekanji' >
            Company&nbsp;Name&nbsp;(Kanji)
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='compnamekanjifield' type='text' ></Form.Control>
          </Col>
        </div>

        {/* The Deployment name field */}
        <div className='depnamebg'>
          <Form.Label column sm='2' className='depname' >
            The&nbsp;Deployment&nbsp;Name
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='depnamefield' type='text' ></Form.Control>
          </Col>
        </div>

        {/* Address Attributes field */}
        <div className='addattribg'>
          <Form.Label column sm='2' className='addattri' >
            Address&nbsp;Attributes
          </Form.Label>

          <Col sm="10">
            <Form.Select aria-label="Default" className='addattridrop' >
              <option value="1">Work</option>
              <option value="2">Home</option>
              <option value="3">School</option>
            </Form.Select>
          </Col>
        </div>


        {/* Customer Address field */}
        <div className='custaddbg'>
          <Form.Label column sm='2' className='custadd' >
            Address
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='custaddfield' type='text' size='sm'/>
            <Form.Label column sm='2' className='custaddcount' >
              0/150
            </Form.Label>
            <Button className='custaddsearch' sm='10' variant='secondary' size='sm'>Search</Button>  

          </Col>
          
          <Form.Control as="textarea" rows={2} className='custaddtextarea'/>
        </div>

        
        {/* Tel field */}
        <div className='telbg'>
          <Form.Label column sm='2' className='tel' >
            Tel
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='custteldropdown' >
              <option value="1">Home</option>
              <option value="2">Work</option>
              <option value="2">Organization</option>
            </Form.Select>
            <Form.Control className='telfield1' type='text' size='sm' ></Form.Control>
            <Form.Control className='telfield2' type='text' size='sm' ></Form.Control>
          </Col>
        </div>

        {/* E-mail field */}
        <div className='custemailbg'>
          <Form.Label column sm='2' className='custemail' >
            Email
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='emailfield' type='text' />
          </Col>
        </div>

        {/* Customer Contact Tel 1 field */}
        <div className='custcontel1bg'>
          <Form.Label column sm='2' className='custcontel1' >
            Contact&nbsp;Tel&nbsp;1
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Control className='custcontelfield1' type='text' size='sm' ></Form.Control>
            <Form.Control className='custcontelfield2' type='text' size='sm' ></Form.Control>
          </Col>
        </div>

        {/* Contact Tel 2 field */}
        <div className='custcontel2bg'>
          <Form.Label column sm='2' className='custcontel2' >
            Contact&nbsp;Tel&nbsp;2
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='custcontel2field1' type='text' />
            <Form.Control className='custcontel2field2' type='text' />
          </Col>
        </div>

        {/* Customer Fax field */}
        <div className='custfaxbg'>
          <Form.Label column sm='2' className='custfax' >
            Fax
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Control className='custfaxfield' type='text' size='sm' />
          </Col>
        </div>
      
      </div>
    {/* End of Customer Information fields */}
    </div>
    

    {/* Product Information fields */}
    <div className='prodinfo'>
      
      <div className='g1'>
        <h1 className='prodinfohead'> Product Information</h1>
        
        {/* Product Information field */}
        <div className='prodinfobg'>
          <Form.Label column sm='2' className='prodinfolabel' >
            Product&nbsp;Information
          </Form.Label>
        </div>

        <Button  as={Col} className='prodeqbutton' sm='10' variant='secondary' size='sm'>Open</Button>
        <Button  as={Col} className='proddelbutton' sm='10' variant='secondary' size='sm'>Delete</Button>
        <Button  as={Col} className='prodclearbutton' sm='10' variant='secondary' size='sm'>Clear</Button>
        
        
        {/* Product Name field */}
        <div className='prodnamebg'>
          <Form.Label column sm='2' className='prodname' >
            Product&nbsp;Name
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Control className='prodnamefield' type='text' size='sm' />
          </Col>
          <Button  as={Col} className='prodsearchbutton' sm='10' variant='secondary' size='sm'>Search</Button>
        </div>

        {/* Manufacturer Name field */}
        <div className='manufacnamebg'>
          <Form.Label column sm='2' className='manufacname' >
            Manufacturer&nbsp;Name
          </Form.Label>

          <Col>
            <Form.Control className='manufacnamefield' type='text' size='sm' />
          </Col>
        </div>

        {/* Trade Name field */}
        <div className='tradenamebg'>
          <Form.Label column sm='2' className='tradename' >
            Trade&nbsp;Name
          </Form.Label>

          <Col>
            <Form.Control className='tradenamefield' type='text' size='sm' />
          </Col>
        </div>

        {/* Manufacturing Number field */}
        <div className='manufacnumbg'>
          <Form.Label column sm='2' className='manufacnum' >
            Manufacturing&nbsp;No.
          </Form.Label>

          <Col>
            <Form.Control className='manufacnumfield' type='text' size='sm' />
          </Col>
        </div>

        
        {/* Release Date field */}
        <div className='releasedatebg'>
          <Form.Label column sm='2' className='releasedate' >
            Release&nbsp;Date
          </Form.Label>

          <Col>
            <Form.Control className='releasedatefield' type='text' size='sm' />
          </Col>
        </div>


        

        {/* Installation Date field */}
        <div className='installdatebg'>
          <Form.Label column sm='2' className='installdate' >
            Installation&nbsp;Date
          </Form.Label>

          <Col>
            <Form.Control className='installdatefield' type='text' size='sm' />
          </Col>
        </div>
        
        <Form.Control as="textarea" rows={6} className='prodinfotextarea'/>
      </div>
      {/* End of Product Iformation division */}
    </div>

    <div className='inqinfo'>

      {/* Inquiry Information division */}
      <div className='g1'>
        <h1 className='inqinfohead'> Inquiry Information</h1>

        {/* Query Classification fields */}
        <div className='queryclassbg'>
          <Form.Label column sm='2' className='queryclasslabel' >
            Query&nbsp;Classification
          </Form.Label>
        </div>

        <Button  as={Col} className='queryeqbutton' sm='10' variant='secondary' size='sm'>Open</Button>
        <Button  as={Col} className='querydelbutton' sm='10' variant='secondary' size='sm'>Delete</Button>
        <Button  as={Col} className='queryclearbutton' sm='10' variant='secondary' size='sm'>Clear</Button>

        {/* Urgency field */}
        <div className='urgencybg'>
          <Form.Label column sm='2' className='urgencyfield' >
            Urgency
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='urgencydropdown' >
              <option value="1">Low</option>
              <option value="2">Middle</option>
              <option value="2">High</option>
            </Form.Select>
          </Col>
        </div>

        {/* Incoming Line field */}
        <div className='inclinebg'>
          <Form.Label column sm='2' className='incline' >
            Incoming&nbsp;Line
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='inclinedropdown' >
              <option value="1">Dispatch</option>
              <option value="2">Incoming Line A</option>
            </Form.Select>
          </Col>
        </div>

        {/* Estimated Response Date and tme */}
        <div className='estdtbg'>
          <Form.Label column sm='2' className='estdt' >
            Est.&nbsp;Response&nbsp;Date&nbsp;and&nbsp;Time
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='esdtfield1' type='text' size='sm'></Form.Control>
            <img src={Cal} alt='Calendar Icon' className='calendar-icon1'/>
            <Form.Control className='esdtfield2' type='text' size='sm'></Form.Control>
            <Button className='esdtacquire' sm='10' variant='secondary' size='sm'>Acquire</Button>
          </Col>
        </div>

        {/* Response Date andTime */}
        <div className='queryrdtbg'>
          <Form.Label column sm='2' className='queryrdt' >
            Response&nbsp;Date&nbsp;and&nbsp;Time
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='querydtfield1' type='text' size='sm'></Form.Control>
            <img src={Cal} alt='Calendar Icon' className='calendar-icon1'/>
            <Form.Control className='querydtfield2' type='text' size='sm'></Form.Control>
            <Button className='queryrdtacquire' sm='10' variant='secondary' size='sm'>Acquire</Button>
          </Col>
        </div>

        {/* Recall Matters */}
        <div className='rmbg'>
          <Form.Label column sm='2' className='rm' >
            Recall&nbsp;Matters
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='rmdropdown' >
              <option value="1">Yes</option>
              <option value="2">No</option>
            </Form.Select>
          </Col>
        </div>

        {/* PL Case field */}
        <div className='queryplcasebg'>
          <Form.Label column sm='2' className='queryplcase' >
            PL&nbsp;Case
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='plcasedropdown' >
              <option value="1">Yes</option>
              <option value="2">No</option>
            </Form.Select>
          </Col>
        </div>

        <Form.Control as="textarea" rows={6} className='queryclasstextarea'/>
      </div>
    {/* End of Inquiry Information fields */}
    </div>

    
    {/* Contents fields */}
    <div className='contents'>
      <div className='g1'>
        <h1 className='contentshead'>Contents</h1>


        {/* 1st Response field */}
        <div className='firstrepbg'>
          <Form.Label column sm='2' className='firstrep' >
            1st&nbsp;Response
          </Form.Label>

          <Button className='supplementbutton' sm='10' variant='secondary' size='sm' disabled>Supplement</Button>
        </div>

        <Button  as={Col} className='contentsclear' sm='10' variant='secondary' size='sm'>Clear</Button>

        {/* Contents Start Date and Time */}
        <div className='contentsdtbg'>
          <Form.Label column sm='2' className='contentsdt' >
            Start&nbsp;Date&nbsp;and&nbsp;Time
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='contentsdtfield1' type='text' size='sm'></Form.Control>
            <img src={Cal} alt='Calendar Icon' className='calendar-icon1'/>
            <Form.Control className='contentsdtfield2' type='text' size='sm'></Form.Control>
            <Button  as={Col} className='contentsdtbutton' sm='10' variant='secondary' size='sm'>Acquire</Button>
          </Col>
        </div>

        {/* Contents End Date and Time fields */}
        <div className='contentsedtbg'>
          <Form.Label column sm='2' className='contentsedt' >
            End&nbsp;Date&nbsp;and&nbsp;Time
          </Form.Label>

          <Col className='testcase1' sm='10'>
            <Form.Control className='contentsedtfield1' type='text' size='sm'></Form.Control>
            <img src={Cal} alt='Calendar Icon' className='calendar-icon1'/>
            <Form.Control className='contentsedtfield2' type='text' size='sm'></Form.Control>
            <Button  as={Col} className='contentsedtbutton' sm='10' variant='secondary' size='sm'>Acquire</Button>
          </Col>
        </div>

        
        {/* Reception Method */}
        <div className='recepmethodbg'>
          <Form.Label column sm='2' className='recepmethod' >
            Reception&nbsp;Method
          </Form.Label>

          <Col className='testcase1' sm="10">
            <Form.Select aria-label="Default" className='recepmethoddropdown' >
              <option value="1">Phone</option>
              <option value="2">Email</option>
              <option value="2">Fax</option>
              <option value="2">Letter</option>
              <option value="2">Web</option>
              <option value="2">Administration Creation Questionnaire</option>
              <option value="2">Others</option>
            </Form.Select>
          </Col>
        </div>

        {/* Item Name field */}
        <div className='itemnamebg'>
          <Form.Label column sm='2' className='itemname' >
            Item&nbsp;Name
          </Form.Label>

          <Col sm='10'>
            <Form.Control className='itemnamefield' type='text' size='sm'></Form.Control>
            <Button as={Col} className='itemnamesearch' sm='10' variant='secondary' size='sm'>...</Button>
          </Col>
        </div>


        {/* Inquiry Details field */}
        <div className='inqdetailsbg'>
          <Form.Label className='inqdetailscount' >
            0&nbsp;/&nbsp;500
          </Form.Label>

          <Form.Label column sm='2' className='inqdetails' >
            Inquiry&nbsp;Details
          </Form.Label>

          <Col>
            <Form.Control as="textarea" rows={5} className='inqdetailstextarea'/>
            <Button  as={Col} className='inqdetailsbutton' sm='10' variant='secondary' size='sm'>...</Button>
          </Col>
          
        </div>

        {/* Contents field */}
        <div className='contentsbg'>
          <Form.Label className='contentscount' >
            0&nbsp;/&nbsp;500
          </Form.Label>

          <Form.Label column sm='2' className='contentslabel' >
            Contents
          </Form.Label>

          <Col>
          <Form.Control as="textarea" rows={5} className='contentstextarea'/>
          <Button  as={Col} className='contentsbutton' sm='10' variant='secondary' size='sm'>...</Button>
          </Col>
          
        </div>

        {/* Remarks field */}
        <div className='remarksbg'>
          <Form.Label className='contentscount' >
            0&nbsp;/&nbsp;1000
          </Form.Label>

          <Form.Label column sm='2' className='remarks' >
            Remarks
          </Form.Label>

          <Col>
            <Form.Control as="textarea" rows={2} className='remarkstextarea'/>
            <Button  as={Col} className='remarksbutton' sm='10' variant='secondary' size='sm'>...</Button>
          </Col>
        </div>
      </div>
    {/* End of Contents field */}
    </div>


    {/* Start of Common field */}
    <div className='commoninfo'>

      {/* First half of Common field */}
      <div className='g1'>
        <h1 className='commoninfohead'>Common</h1>

        {/* Implementation of CS Survey field */}
        <div className='impsurveybg'>
          <Form.Label className='impsurvey' >
            Implementation&nbsp;of&nbsp;CS&nbsp;Survey
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='impsurveydropdown' >
              <option value="1">Request and Accept</option>
              <option value="2">Requested, but rejected</option>
              <option value="3">Could not request</option>
              <option value="4">Not Applicable</option>
            </Form.Select>
          </Col>
        </div>

        {/* Workaround field */}
        <div className='workaroundbg'>
          <Form.Label className='workaround' >
            Workaround
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='workarounddropdown' >
              <option value="1">Solve it yourself</option>
              <option value="2">Callback Resolution</option>
              <option value="3">Escale to LD/SV</option>
              <option value="4">Business Division Consultation</option>
              <option value="5">Factory Consultation</option>
              <option value="6">Consultation with the Supervising Department</option>
              <option value="7">SS Consultation</option>
              <option value="8">Cutting off from customers</option>
              <option value="9">Introduction of other departments</option>
              <option value="10">Request for partner stores (Specific)</option>
              <option value="11">Request for partner stores (Special)</option>
            </Form.Select>
          </Col>
        </div>
      </div>

      {/* Second half of Common field */}
      <div className='g1'>
      <Button  as={Col} className='commonclear' sm='10' variant='secondary' size='sm'>Clear</Button>

        {/* Dissatisfied field */}
        <div className='dissatisfiedbg'>
          <Form.Label className='dissatisfied' >
            Dissatisfied
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='dissatisfieddropdown' >
              <option value="1">Yes</option>
              <option value="2">No</option>
            </Form.Select>
          </Col>
        </div>

        {/* Resolution Details field */}
        <div className='resodetailsbg'>
          <Form.Label className='resodetails' >
            Resolution&nbsp;Details
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='resodetailsdropdown' >
            <option value="1">Phone</option>
              <option value="2">Work</option>
              <option value="2">Corporation</option>
            </Form.Select>
          </Col>
        </div>
      
      </div>
      {/* End of Common fields */}
    </div>


    {/* Start of Home Application Information fields */}
    <div className='homeappinfo'>

      {/* First half of Home Application Information fields */}
      <div className='g1'>
        <h1 className='homeapphead'>Home Application Informaton</h1>

        {/* Outcome field */}
        <div className='outcomebg'>
          <Form.Label className='outcome' >
            Outcome
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='outcomedropdown'>
              <option value="1">Guide Solution</option>
              <option value="2">Repair Guide</option>
              <option value="3">Repair Procedure</option>
              <option value="4">Add Slip</option>
              <option value="5">Introduction of other contract points and suppliers</option>
              <option value="6">Conduct a questionnaire and solve guidance</option>
              <option value="7">Conduct a medical interview and provide repair information</option>
              <option value="8">Conduct a medical interview and repair procedures</option>
              <option value="9">Ongoing</option>
              <option value="10">Others</option>
            </Form.Select>
          </Col>
        </div>

        {/* Action field */}
        <div className='actionbg'>
          <Form.Label className='action' >
            Action
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='actiondropdown'>
              <option value="1">Without</option>
              <option value="2">Yes (Catalog Sent)</option>
              <option value="3">Yes (Sent except for catalog)</option>
            </Form.Select>
          </Col>
        </div>

        {/* Customer References field */}
        <div className='custrefbg'>
          <Form.Label className='custref' >
            Customer&nbsp;References
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='custrefdropdown' >
              <option value="1">Instruction Manual</option>
              <option value="2">Own Website</option>
              <option value="3">Net Information</option>
              <option value="4">Catalogue</option>
              <option value="5">Nothing In Particular</option>
              <option value="6">Unconfirmed</option>
            </Form.Select>
          </Col>
        </div>

      </div>

      {/* Second half of the Home Application Informaton field */}
      <div className='g1'>
        <Button  as={Col} className='homeappliclear' sm='10' variant='secondary' size='sm'>Clear</Button>
        
        {/* Interview Code field */}
        <div className='interviewcodebg'>
          <Form.Label className='interviewcode' >
            Interview&nbsp;Code
          </Form.Label>

          <Col >
            <Form.Control className='interviewcodefield' type='text' size='sm' />
          </Col>
        </div>

        {/* Request for Proposal field */}
        <div className='reqprosbg'>
          <Form.Label className='reqpros' >
            Request&nbsp;for&nbsp;Proposal
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='reqprosdropdown'>
              <option value="1">Without</option>
              <option value="2">Commodity</option>
              <option value="3">Service</option>
            </Form.Select>
          </Col>
        </div>
      </div>
      {/* End of Home Applicaiton Information fields */}
    </div>

    {/* Start of Air Conditioning Information fields */}
    <div className='airconinfo'>

      {/* First half of Air Conditioning Information fields */}
      <div className='g1'>
        <h1 className='airconhead'>Air Conditioning Information</h1>

        {/* Succession Control Number field */}
        <div className='controlnumbg'>
          <Form.Label className='controlnum' >
            Succession&nbsp;Control&nbsp;Number
          </Form.Label>

          <Col >
            <Form.Control className='controlnumfield' type='text' size='sm' />
          </Col>
        </div>

        {/* Flag field */}
        <div className='flagbg'>
          <Form.Label className='flag' >
            Flag
          </Form.Label>

          <Col >
            <Form.Control className='flagfield' type='text' size='sm' />
          </Col>
        </div>
      </div>

      {/* Second half of Air Conditioning Information fields */}
      <div className='g1'>
        <Button  as={Col} className='airconclear' sm='10' variant='secondary' size='sm'>Clear</Button>

        {/* Callback field */}
        <div className='callbackbg'>
          <Form.Label className='callback' >
            Callback
          </Form.Label>

          <Col >
            <Form.Control className='callbackfield' type='text' size='sm' />
          </Col>
        </div>

        {/* Bussiness Segment field */}
        <div className='businessclassbg'>
          <Form.Label className='businessclass' >
            Business&nbsp;Segment
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='businessclassdropdown'>
              <option value="1">SCSK</option>
              <option value="2">TCI Sendai</option>
              <option value="3">Q&A</option>
              <option value="4">TCI Fukuoka</option>
              <option value="5">KDDI</option>
              <option value="6">SCSK (Air Cleaner)</option>
              <option value="7">Wcs</option>
              <option value="8">Recall Response</option>
              <option value="9">Bath Drying</option>
            </Form.Select>
          </Col>
        </div>
      </div>
    </div>

    {/* Start of SCT Hot Water Wash Toilet Seat Information */}
    <div className='scthotinfo'>

      {/* Division 1 of SCT Hot Water Toilet Seat Information */}
      <div className='g1'>
        <h1 className='scthothead'>SCT Hot Water wash Toilet Information</h1>

        {/* Purchase Store Name field */}
        <div className='pstorebg'>
          <Form.Label className='pstore' >
            Purchase&nbsp;Store&nbsp;Name
          </Form.Label>

          <Col >
            <Form.Control className='pstorefield' type='text' size='sm' />
          </Col>
        </div>

        {/* Product */}
        <div className='prodbg'>
          <Form.Label className='prod' >
            Product
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='proddropdown' >
                <option value="1">Target</option>
                <option value="2">Not Eligible</option>
            </Form.Select>
          </Col>
        </div>
      </div>


      {/* Division 2 of SCT Hot Water Toilet Seat Information*/}
      <div className='g1'>
        <Button  as={Col} className='sctclear' sm='10' variant='secondary' size='sm'>Clear</Button>

        {/* Announcement field */}
        <div className='announcementbg'>
          <Form.Label className='announcement' >
            Announcement
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='announcementdropdown' >
              <option value="1">Distributor (DM)</option>
              <option value="2">Dealer (Phone)</option>
              <option value="3">Dealer (Email)</option>
              <option value="4">Distributor (Others)</option>
              <option value="5">Contact from Toshiba Sales</option>
              <option value="6">Toshiba HP</option>
              <option value="7">Other HP</option>
              <option value="8">Others</option>
            </Form.Select>
          </Col>
        </div>

        {/* Deodorizing field */}
        <div className='deobg'>
          <Form.Label className='deo' >
            Deodorizing
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='deodropdown'>
              <option value="1">Guided</option>
              <option value="2">Not Applicable</option>
            </Form.Select>
          </Col>
        </div>
      </div>
    </div>

    {/* Laundry Information */}
    <div className='laundryinfo'>

      {/* Division 1 of Laundry Information */}
      <div className='g1'>
        <h1 className='laundryinfohead'> (A)Laundry Information</h1>

        {/* Waterproof */}
        <div className='waterproofbg'>
          <Form.Label className='waterproof' >
            Waterproof
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='waterdropdown' >
              <option value="1">Yes</option>
              <option value="2">No</option>
              <option value="3">Unknown</option>
            </Form.Select>
          </Col>
        </div>

        {/* Residence */}
        <div className='livebg'>
          <Form.Label className='live' >
            Residence
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='livedropdown'>
              <option value="1">Condominium</option>
              <option value="2">Detached</option>
              <option value="3">Others</option>
            </Form.Select>
          </Col>
        </div>

        {/* Building Name */}
        <div className='buildnamebg'>
          <Form.Label className='buildname' >
            Building&nbsp;Name
          </Form.Label>

          <Col >
            <Form.Control className='buildnamefield' type='text' size='sm' />
          </Col>
        </div>

        {/* Laundry Dealer Name */}
        <div className='laundrydealnamebg'>
          <Form.Label className='laundrydealname' >
            Dealer&nbsp;Name
          </Form.Label>

          <Col >
            <Form.Control className='laundrydealnamefield' type='text' size='sm' />
          </Col>
        </div>
      </div>

      {/* Division 2 of Laundry Information */}
      <div className='g1'>
        <Button  as={Col} className='laundryclear' sm='10' variant='secondary' size='sm'>Clear</Button>
        
        {/* Workspace field */}
        <div className='workspacebg'>
          <Form.Label className='workspace' >
            Workspace
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='workspacedropdown'>
              <option value="1">Yes</option>
              <option value="2">No</option>
              <option value="3">Unknown</option>
            </Form.Select>
          </Col>
        </div>

        {/* Response Results field */}
        <div className='respresbg'>
          <Form.Label className='respres' >
            Response&nbsp;Results
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='respresdropdown'>
              <option value="1">Repair Schedule Reception</option>
              <option value="2">Repair Cancellation Acceptance</option>
              <option value="3">Repair Schedule Change Acceptance (Appointment adjustment required)</option>
              <option value="4">Repair Schedule Change Acceptance (Adjustment required)</option>
              <option value="5">Inquiry Only</option>
              <option value="6">Non-recall Inquiries</option>
              <option value="7">Others</option>
            </Form.Select>
          </Col>
        </div>

        {/* Takeover field */}
        <div className='takeoverbg'>
          <Form.Label className='takeover' >
            Takeover
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='takeoverdropdown'>
              <option value="1">(Aichi)</option>
              <option value="2">Home Appliances CC</option>
              <option value="3">Others</option>
            </Form.Select>
          </Col>
        </div>
      </div>
    </div>

    {/* Cleaner Information */}
    <div className='cleanerinfo'>

      {/* Division 1 of Cleaner Information */}
      <div className='g1'>

        <h1 className='cleanerinfohead'>Cleaner Information</h1>

        {/* Model Number field */}
        <div className='modelnumbg'>
          <Form.Label className='modelnum' >
            Model&nbsp;Number
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='modelnumdropdown'>
              <option value="1">Vc-Y2C</option>
              <option value="2">Vc-H2C</option>
              <option value="3">Others</option>
            </Form.Select>
          </Col>
        </div>

        {/* Target Lot field */}
        <div className='targetlotbg'>
          <Form.Label className='targetlot' >
            Target&nbsp;Lot
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='targetlotdropdown'>
              <option value="1">Target</option>
              <option value="2">Not Applicable</option>
            </Form.Select>
          </Col>
        </div>

        {/* Delivery Designation field */}
        <div className='delidesbg'>
          <Form.Label className='delides' >
            Delivery&nbsp;Designation
          </Form.Label>

          <Col >
            <Form.Control className='delidesfield' type='text' size='sm' />
            <img src={Cal} alt='Calendar Icon' className='delidescalendar'/>
          </Col>
          
        </div>

        {/* DM Number field */}
        <div className='dmnumbg'>
          <Form.Label className='dmnum' >
            DM&nbsp;Number
          </Form.Label>

          <Col >
            <Form.Control className='dmnumfield' type='text' size='sm' />
          </Col>
        </div>
      </div>

      {/* Division 2 of Cleaner Infomation */}
      <div className='g1'>
        <Button  as={Col} className='cleanerclear' sm='10' variant='secondary' size='sm'>Clear</Button>

        {/* Cleaner Manufacturing Number field */}
        <div className='cleanermanufacnumbg'>
         <Form.Label className='cleanermanufacnum' >
            Manufacturing&nbsp;NO.
          </Form.Label>

          <Col >
            <Form.Control className='cleanermanufacnumfield' type='text' size='sm' />
          </Col>
        </div>

        {/* Transportation Request Number field */}
        <div className='transponumbg'>
          <Form.Label className='transponum' >
            Transportation&nbsp;NO.
          </Form.Label>

          <Col >
            <Form.Control className='transponumfield' type='text' size='sm' />
          </Col>
        </div>

        {/* Designated Delivery Time Zone field */}
        <div className='deltimezonebg'>
          <Form.Label className='delitimezone' >
            Delivery&nbsp;Time&nbsp;Zone
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='delitimedropdown'>
              <option value="1">Morning</option>
              <option value="2">From 12PM to 2PM</option>
              <option value="3">From 2PM to 4PM</option>
              <option value="4">From 4PM to 6PM</option>
              <option value="5">From 6PM to 8PM</option>
              <option value="6">From 8PM to 9PM</option>
            </Form.Select>
          </Col>
        </div>
      </div>
    </div>

    {/* Water Heater Information */}
    <div className='waterheaterinfo'>

      {/* Division 1 of Water Heater Information */}
      <div className='g1'>
        <h1 className='waterheaterhead'>Water Heater Information</h1>

        {/* Water Heater Correspondence field */}
        <div className='heatercorresbg'>
          <Form.Label className='heatercorres' >
            Correspondence
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='heatercorresdropdown'>
              <option value="1">Send Fax</option>
              <option value="2">Special Arrangements</option>
              <option value="3">Specific Strengths</option>
              <option value="4">Kanagawa Prefecture</option>
              <option value="5">Oita Prefecture</option>
              <option value="6">From 2PM to 4PM</option>
            </Form.Select>
          </Col>
        </div>
      </div>

      {/* Division 2 of Water Heater Information */}
      <div className='g1'>
        <Button  as={Col} className='waterclear' sm='10' variant='secondary' size='sm'>Clear</Button>

        {/* Water Heater Status field */}
        <div className='heaterstatusbg'>
          <Form.Label className='heaterstatus' >
            Status
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='heaterstatusdropdown'>
              <option value="1">Processing</option>
              <option value="2">SV Request in Progress</option>
              <option value="3">Finished</option>
              <option value="4">Revocation</option>
              <option value="5">Provisional Registration</option>
              <option value="6">Consulting with Shinagawa</option>
              <option value="7">Special Arrangement Pending</option>
              <option value="8">Specific Specialty Requesting</option>
              <option value="9">Kanagawa Prefecture Correspondence Requesting</option>
              <option value="10">Oita Prefecture Correspondence Requesting</option>
            </Form.Select>
          </Col>
        </div>
      </div>
    </div>

    {/* ENEFARM Fields */}
    <div className='enefarminfo'>

      {/* Division 1 of ENEFARM */}
      <div className='g1'>
        <h1 className='enefarminfohead'>ENEFARM</h1>

        {/* Error field */}
        <div className='errorbg'>
          <Form.Label className='error' >
            Error
          </Form.Label>

          <Col >
            <Form.Control className='errorfield' type='text' size='sm' />
          </Col>
        </div>

        {/* Dealer (Special Contract) field */}
        <div className='dealspecialcontbg'>
          <Form.Label className='dealspecialcont' >
            Dealer&nbsp;(Special&nbsp;Contract)
          </Form.Label>

          <Col >
            <Form.Control className='dealspecialcontfield' type='text' size='sm' />
          </Col>
        </div>

        {/* Business Request Number field */}
        <div className='businessnumbg'>
          <Form.Label className='businessnum' >
            Business&nbsp;Request&nbsp;No.
          </Form.Label>

          <Col >
            <Form.Control className='businessnumfield' type='text' size='sm' />
          </Col>
        </div>
      </div>

      {/* Division 2 of ENEFARM */}
      <div className='g1'>
        <Button  as={Col} className='enefarmclear' sm='10' variant='secondary' size='sm'>Clear</Button>

        {/* JX Reception Code field */}
        <div className='jaxrecepcodebg'>
          <Form.Label className='jxrecepcode' >
            JX&nbsp;Reception&nbsp;Code
          </Form.Label>

          <Col >
            <Form.Control className='jxrecepcodefield' type='text' size='sm' />
          </Col>
        </div>

        {/* Distributor Energy Business */}
        <div className='energybg'>
          <Form.Label className='energy' >
            Distributor&nbsp;Energy&nbsp;Business
          </Form.Label>

          <Col >
            <Form.Control className='energyfield' type='text' size='sm' />
          </Col>
        </div>
      </div>
    </div>

    {/* Electric Stove Information fields */}
    <div className='elecstoveinfo'>

      {/* Division 1 of Electric Stove Information */}
      <div className='g1'>
        <h1 className='elecstovehead'>Electric Stove Information</h1>

        {/* Electric Stove Purchase Store Name field */}
        <div className='stovestorenamebg'>
          <Form.Label className='stovestorename' >
            Purchase&nbsp;Store&nbsp;Name
          </Form.Label>

          <Col >
            <Form.Control className='stovestorenamefield' type='text' size='sm' />
          </Col>
        </div>

        {/* Electric Stove Product field */}
        <div className='stoveprodbg'>
          <Form.Label className='stoveprod' >
            Product
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='stoveproddropdown'>
              <option value="1">Target</option>
              <option value="2">Not Eligible</option>
            </Form.Select>
          </Col>
        </div>

        {/* Number of Shipments field */}
        <div className='shipmentbg'>
          <Form.Label className='shipment' >
            Number&nbsp;of&nbsp;Shipments
          </Form.Label>

          <Col >
            <Form.Control className='shipmentfield' type='text' size='sm' />
          </Col>
        </div>
      </div>

      {/* Division 2 of Electric Stove Information */}
      <div className='g1'>
        <Button  as={Col} className='stoveclear' sm='10' variant='secondary' size='sm'>Clear</Button>

        {/* Electric Stove Announcement field */}
        <div className='stoveannouncementbg'>
          <Form.Label className='stoveannouncement' >
            Announcement
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='stoveannouncementdropdown'>
              <option value="1">Distributor (DM)</option>
              <option value="2">Dealer (Phone)</option>
              <option value="3">Dealer (Email)</option>
              <option value="4">Distributor (Other)</option>
              <option value="5">Contact from Toshiba Sales</option>
              <option value="6">Toshiba HP</option>
              <option value="7">Other HP</option>
              <option value="8">Others</option>
            </Form.Select>
          </Col>
        </div>

        {/* Scheme Code field */}
        <div className='schemecodebg'>
          <Form.Label className='schemecode' >
            Scheme&nbsp;Code
          </Form.Label>

          <Col>
            <Form.Select aria-label="Default" className='schemecodedropdown' >
              <option value="1">R</option>
              <option value="2">T</option>
              <option value="3">And</option>
              <option value="4">K</option>
            </Form.Select>
          </Col>
        </div>
      </div>
    </div>

    {/* Subcase List fields */}
    <div className='sublistinfo'>
      <div className='g1'>
        <h1 className='sublisthead'>Subcase List</h1>

        <Col>
          <Button  as={Col} className='historybrowsingbutton' sm='10' variant='secondary' size='sm'>History&nbsp;Browsing</Button>
          <Button  as={Col} className='recepcorrectionbutton' sm='10' variant='secondary' size='sm'>Reception&nbsp;Correction</Button>
          <Button  as={Col} className='changedatebutton' sm='10' variant='secondary' size='sm'>Change&nbsp;of&nbsp;Visit&nbsp;Date</Button>
          <Button  as={Col} className='referencebutton' sm='10' variant='secondary' size='sm'>Reference</Button>
          <Button  as={Col} className='saveeditbutton' sm='10' variant='secondary' size='sm'>Save&nbsp;Edit</Button>
          <Button  as={Col} className='firstpagebutton' sm='10' variant='secondary' size='sm'>First&nbsp;Page</Button>
          <Button  as={Col} className='prevpagebutton' sm='10' variant='secondary' size='sm'>Previous&nbsp;Page</Button>
          <Button  as={Col} className='nextpagebutton' sm='10' variant='secondary' size='sm'>Next&nbsp;Page</Button>
          <Button  as={Col} className='lastpagebutton' sm='10' variant='secondary' size='sm'>Last&nbsp;Page</Button>
        </Col>

        <Table striped bordered size="lg" className='subcasetable'>
          <thread className='thread1'>
            {/* Subcase List Headers */}
            <tr className='headerrow'>
              <th className='tableheader'>No.</th>
              <th className='tableheader'>Slip No.</th>
              <th className='tableheader'>Reception No.</th>
              <th className='tableheader'>Classification</th>
              <th className='tableheader'>Distinction</th>
              <th className='tableheader'>Modified Date and Time</th>
              <th className='tableheader'>Affiliation</th>
              <th className='tableheader'>Respondent</th>
              <th className='tableheader'>Status</th>
            </tr>

            {/* Subcase  */}
            <tr>
              <td className='tablerow'>test row 1</td>
              <td className='tablerow'>test row 2</td>
              <td className='tablerow'>test row 3</td>
              <td className='tablerow'>test row 4</td>
              <td className='tablerow'>test row 5</td>
              <td className='tablerow'>test row 6</td>
              <td className='tablerow'>test row 7</td>
              <td className='tablerow'>test row 8</td>
              <td className='tablerow'>test row 9</td>
            </tr>

            {/* Subcase  */}
            <tr>
              <td className='tablerow'>test row 1</td>
              <td className='tablerow'>test row 2</td>
              <td className='tablerow'>test row 3</td>
              <td className='tablerow'>test row 4</td>
              <td className='tablerow'>test row 5</td>
              <td className='tablerow'>test row 6</td>
              <td className='tablerow'>test row 7</td>
              <td className='tablerow'>test row 8</td>
              <td className='tablerow'>test row 9</td>
            </tr>
          </thread>
        </Table>
      </div>
    </div>

    {/* End of all whole division */}
    </div>

    );
}

export default Mainform;