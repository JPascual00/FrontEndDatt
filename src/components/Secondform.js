import 'bootstrap/dist/css/bootstrap.min.css';
import './Secondform.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Cal from './calendar.png';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";


const Secondforms = (props) => {

    const navigate = useNavigate();

    return (
        <div className='secondform'>
            <h1 className='mainheader'>Answer Record Search</h1>

            <Col className='mainbuttons'>
                <Button  as={Col} className='ansrecsearch' sm='10' variant='secondary' size='sm'>Open</Button>
                <Button  as={Col} className='ansrecclear' sm='10' variant='secondary' size='sm'>Delete</Button>
                <Button  as={Col} className='ansrecclose' sm='10' variant='secondary' size='sm'>Close</Button>
            </Col>

            {/* Basic Search Items Information */}
            <div className='basicsearchinfo'>
                <div className='g2'>
                    <h1 className='basicsearchhead'>Basic Search Items</h1>
                    
                    <div className='receptdtbg'>
                        <Form.Label column sm ='2'className='recepdt'>Reception&nbsp;Date&nbsp;and&nbsp;Time</Form.Label>

                        <Col className='testcase2' >
                            <Form.Label className='recepdtyear1'>Year</Form.Label>
                            <Form.Label className='recepdtmonth1'>Month</Form.Label>
                            <Form.Label className='recepdtday1'>Day</Form.Label>
                            <Form.Label className='recepdttime1'>Time</Form.Label>
                            <Form.Label className='conjunction'>To</Form.Label>
                            <Form.Label className='recepdtyear2'>Year</Form.Label>
                            <Form.Label className='recepdtmonth2'>Month</Form.Label>
                            <Form.Label className='recepdtday2'>Day</Form.Label>
                            <Form.Label className='recepdttime2'>Time</Form.Label>
                        </Col>
                        
                        <Form.Select aria-label="Default" className='recepdtyear1dropdown' size='sm'></Form.Select>
                        <Form.Select aria-label="Default" className='recepdtmonth1dropdown' size='sm'></Form.Select>
                        <Form.Select aria-label="Default" className='recepdtday1dropdown' size='sm'></Form.Select>
                        <Form.Control className='recepdttime1field' type='text' size='sm' placeholder='00:00'></Form.Control>
                        <Form.Select aria-label="Default" className='recepdtyear2dropdown' size='sm'></Form.Select>
                        <Form.Select aria-label="Default" className='recepdtmonth2dropdown' size='sm'></Form.Select>
                        <Form.Select aria-label="Default" className='recepdtday2dropdown' size='sm'></Form.Select>
                        <Form.Control className='recepdttime2field' type='text' size='sm' placeholder='00:00'></Form.Control>
                    </div>

                    
                </div>
            </div>

            {/* Basic Info fields */}
            <div className='secondbasicinfo'>
                <div className='g2'>
                    <h1 className='secondbasicinfoheader'>Basic Info</h1>

                    {/* Reception Code field */}
                    <div className='secondrecepcodebg'>
                        <Form.Label className='secondrecepcode'>Reception Code</Form.Label>
                        <Form.Control className='secondrecepcodefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Basic Info Status field */}
                    <div className='basicinfostatusbg'>
                        <Form.Label className='basicinfostatus'>Status</Form.Label>
                        <Form.Select aria-label="Default" className='basicinfostatusdropdown' size='sm'></Form.Select>
                    </div>

                    {/* Succesion field */}
                    <div className='successionbg'>
                        <Form.Label className='succession'>Succesion</Form.Label>
                        <Form.Select aria-label="Default" className='successiondropdown' size='sm'></Form.Select>
                    </div>

                    {/* Reception Group field */}
                    <div className='recepgroupbg'>
                        <Form.Label className='recepgroup'>Reception Group</Form.Label>
                        <Form.Select aria-label="Default" className='recepgroupdropdown1' size='sm'></Form.Select>
                        <Form.Select aria-label="Default" className='recepgroupdropdown2' size='sm'></Form.Select>
                        <Form.Select aria-label="Default" className='recepgroupdropdown3' size='sm'></Form.Select>
                        <Form.Select aria-label="Default" className='recepgroupdropdown4' size='sm'></Form.Select>
                    </div>

                    {/* Basic Info Receptionist field */}
                    <div className='basicinforecepbg'>
                        <Form.Label className='basicinforecep'>Receptionist</Form.Label>
                        <Form.Control className='basicinforeceptionistfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Response Groups field */}
                    <div className='respogroupbg'>
                        <Form.Label className='respogroup'>Response Group</Form.Label>
                        <Form.Select aria-label="Default" className='respogroupdropdown1' size='sm'></Form.Select>
                        <Form.Select aria-label="Default" className='respogroupdropdown2' size='sm'></Form.Select>
                        <Form.Select aria-label="Default" className='respogroupdropdown3' size='sm'></Form.Select>
                        <Form.Select aria-label="Default" className='respogroupdropdown4' size='sm'></Form.Select>
                    </div>

                    {/* Respodent field */}
                    <div className='secondrespobg'>
                        <Form.Label className='secondrespo'>Response Group</Form.Label>
                        <Form.Control className='secondrespofield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Basic Info Completion Date and Time */}
                    <div className='basicinfocdtbg'>
                        <Form.Label className='basicinfocdt'>Completion Date and Time</Form.Label>

                        <Col className='testcase2'>
                            <Form.Label className='cdtyear'>Year</Form.Label>
                            <Form.Label className='cdtmonth'>Month</Form.Label>
                            <Form.Label className='cdtday'>Day</Form.Label>
                            <Form.Label className='cdttime'>Time</Form.Label>
                        </Col>

                        <Form.Control className='cdtyearfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='cdtmonthfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='cdtdayfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='cdttimefield' type='text' size='sm' placeholder='00:00'></Form.Control>
                    </div>
                </div>
            </div>

            {/* Answer Record Search -  Dealer Information field */}
            <div className='ansrecdealerinfo'>
                <div className='g2'>
                    <h1 className='ansrecdealerinfohead'>Dealer Information</h1>

                    {/* Answer Record Search - Dealer Tel field */}
                    <div className='ansrecdealertelbg'>
                        <Form.Label className='ansrecdealertel'>Dealer Tel</Form.Label>
                        <Form.Control className='ansrecdealertelfield1' type='text' size='sm'></Form.Control>
                        <Form.Control className='ansrecdealertelfield2' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Reseller Code field */}
                    <div className='ansrecrescodebg'>
                        <Form.Label className='ansrecrescode'>Reseller Code</Form.Label>
                        <Form.Control className='ansrecrescodefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Dealer Name field */}
                    <div className='ansrecdealernamebg'>
                        <Form.Label className='ansrecdealername'>Dealer Name</Form.Label>
                        <Form.Control className='ansrecdealernamefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Responsible field */}
                    <div className='ansrecresponsiblebg'>
                        <Form.Label className='ansrecresponsible'>Responsible</Form.Label>
                        <Form.Control className='ansrecresponsiblefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Dealer Fax field */}
                    <div className='ansrecdealerfaxbg'>
                        <Form.Label className='ansrecdealerfax'>Dealer Fax</Form.Label>
                        <Form.Control className='ansrecdealerfaxfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Anseer Record Search - Order Number field */}
                    <div className='ansrecordernumbg'>
                        <Form.Label className='ansrecordernum'>Order Number</Form.Label>
                        <Form.Control className='ansrecordernumfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Dealer Address */}
                    <div className='ansrecdealeraddbg'>
                        <Form.Label className='ansrecdealeradd'>Dealer Address</Form.Label>
                        <Form.Control className='ansrecdealeraddfield' type='text' size='sm'></Form.Control>
                    </div>
                </div>
            </div>

            {/* Answer Record Search - Customer Information */}
            <div className='ansreccustinfo'>
                <div className='g2'>
                    <h1 className='ansreccustinfoheader'>Customer Information</h1>

                    {/* Answer Record Search - Gender field */}
                    <div className='ansrecgenderbg'>
                        <Form.Label className='ansrecgender'>Gender</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecgenderdropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Age field */}
                    <div className='ansrecagebg'>
                        <Form.Label className='ansrecrelation'>Age</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecagedropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Area field */}
                    <div className='ansrecareabg'>
                        <Form.Label className='ansrecarea'>Area</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecareadropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Relation field */}
                    <div className='ansrecrelationbg'>
                        <Form.Label className='ansrecrelation'>Relation</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecrelationdropdown' size='sm'></Form.Select>
                    </div>
                    

                    {/* Answer Record Search - Institutional Classification field */}
                    <div className='ansrecinsclassbg'>
                        <Form.Label className='ansrecinsclass'>Ins. Classification</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecinsclassdropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Type of Customer field */}
                    <div className='ansrectocbg'>
                        <Form.Label className='ansrectoc'>Type of Customer</Form.Label>
                        <Form.Select aria-label="Default" className='ansrectocdropdown' size='sm'></Form.Select>

                    </div>

                    {/* Answer Record Search - Customer Name (Kanji) field */}
                    <div className='ansreccustnamekanjibg'>
                        <Form.Label className='ansreccustnamekanji'>Customer Name (Kanji)</Form.Label>
                        <Form.Control className='ansreccustnamekanjifield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Customer Name (Katakana) field */}
                    <div className='ansreccustnamekanabg'>
                        <Form.Label className='ansreccustnamekana'>Customer Name (Katakana)</Form.Label>
                        <Form.Control className='ansreccustnamekanafield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Company Name (Kanji) field */}
                    <div className='ansreccompnamekanjibg'>
                        <Form.Label className='ansreccompnamekanji'>Company Name (Kanji)</Form.Label>
                        <Form.Control className='ansreccompnamekanjifield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Company Name (Katakana) field */}
                    <div className='ansreccompnamekanabg'>
                        <Form.Label className='ansreccompnamekana'>Company Name (Katakana)</Form.Label>
                        <Form.Control className='ansreccompnamekanafield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Address field */}
                    <div className='ansreccustaddbg'>
                         <Form.Label className='ansreccustadd'>Address</Form.Label>
                         <Form.Control className='ansreccustaddfield' type='text' size='sm'></Form.Control>
                         <Form.Control as="textarea" rows={2} className='ansreccustaddtextarea'/>
                    </div>

                    {/* Answer Record Search - Tel field */}
                    <div className='ansreccusttelbg'>
                        <Form.Label className='ansreccusttel'>Tel</Form.Label>
                        <Form.Control className='ansreccusttelfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Email field */}
                    <div className='ansrecemailbg'>
                         <Form.Label className='ansrecemail'>Email</Form.Label>
                         <Form.Control className='ansrecemailfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Fax field */}
                    <div className='ansreccustfaxbg'>
                        <Form.Label className='ansreccustfax'>Fax</Form.Label>
                        <Form.Control className='ansreccustfaxfield' type='text' size='sm'></Form.Control>
                    </div>
                    
                </div>
            </div>

            {/* Answer Record Search - Product Information */}
            <div className='ansrecprodinfo'>
                <div className='g2'>
                    <h1 className='ansrecprodinfoheader'>Product Information</h1>

                    {/* Answer Record Search - Product Information field */}
                    <div className='ansrecprodinfobg'>
                        <Form.Label className='ansrecprodinfolabel'>Product Information</Form.Label>
                        <Form.Control as="textarea" rows={8} className='ansrecprodinfotextarea'/>
                    </div>

                    <Button  as={Col} className='ansrecprodinfoeqbutton' sm='10' variant='secondary' size='sm'>Open</Button>
                    <Button  as={Col} className='ansrecprodinfodelbutton' sm='10' variant='secondary' size='sm'>Delete</Button>

                    {/* Answer Record Search - Product Name field */}
                    <div className='ansrecprodnamebg'>
                        <Form.Label className='ansrecprodname'>Product Name</Form.Label>
                        <Form.Control className='ansrecprodnamefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Trade Name field */}
                    <div className='ansrectradenamebg'>
                        <Form.Label className='ansrectradename'>Trade Name</Form.Label>
                        <Form.Control className='ansrectradenamefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Installation Date field */}
                    <div className='ansrecinstalldatebg'>
                        <Form.Label className='ansrecinstalldate'>Installation Date</Form.Label>

                        <Col className='testcase2'>
                            <Form.Label className='ansrecinstalldateyear'>Year</Form.Label>
                            <Form.Label className='ansrecinstalldatemonth'>Month</Form.Label>
                            <Form.Label className='ansrecinstalldateday'>Day</Form.Label>
                        </Col>
                       
                        <Form.Control className='ansrecinstalldateyearfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='ansrecinstalldatemonthfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='ansrecinstalldatedayfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Manufacturing No. field */}
                    <div className='ansrecmanufacnumbg'>
                        <Form.Label className='ansrecmanufacnum'>Manufacturing No.</Form.Label>
                        <Form.Control className='ansrecmanufacnumfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Manufacturing Name field */}
                    <div className='ansrecmanufacnamebg'>
                        <Form.Label className='ansrecmanufacname'>Manufacturing Name</Form.Label>
                        <Form.Control className='ansrecmanufacnamefield' type='text' size='sm'></Form.Control>
                    </div>
                </div>
            </div>


            {/* Anwer Record Search - Inquiry Information */}
            <div className='ansrecinqinfo'>
                <div className='g2'>
                    <h1 className='ansrecqueryclassheader'>Inquiry Information</h1>

                    {/* Answer Record Search - Query Classification field */}
                    <div className='ansrecqueryclassbg'>
                         <Form.Label className='ansrecqueryclass'>Query Classification</Form.Label>
                         <Form.Control as="textarea" rows={8} className='ansrecqueryclasstextarea'/>
                    </div>

                    <Button  as={Col} className='ansrecqueryclasseqbutton' sm='10' variant='secondary' size='sm'>Open</Button>
                    <Button  as={Col} className='ansrecqueryclassdelbutton' sm='10' variant='secondary' size='sm'>Delete</Button>

                    {/* Answer Record Search - Urgency field */}
                    <div className='ansrecurgencybg'>
                        <Form.Label className='ansrecurgency'>Urgency</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecurgencydropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Estimated Response Date field */}
                    <div className='ansrecedtbg'>
                        <Form.Label className='ansrecedt'>Est. Response Date</Form.Label>

                        <Col className='testcase2'>
                            <Form.Label className='ansrecedtyear'>Year</Form.Label>
                            <Form.Label className='ansrecedtmonth'>Month</Form.Label>
                            <Form.Label className='ansrecedtday'>Day</Form.Label>
                            <Form.Label className='ansrecedttime'>Time</Form.Label>
                        </Col>

                        <Form.Control className='ansrecedtyearfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='ansrecedtmonthfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='ansrecedtdayfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='ansrecedttimefield' type='text' size='sm' placeholder='00:00'></Form.Control>
                    </div>

                    {/* Answer Record Search - Response Date and Time field */}
                    <div className='ansrecrdtbg'>
                        <Form.Label className='ansrecrdt'>Response Date and Time</Form.Label>

                        <Col className='testcase2'>
                             <Form.Label className='ansrecrdtyear'>Year</Form.Label>
                             <Form.Label className='ansrecrdtmonth'>Month</Form.Label>
                             <Form.Label className='ansrecrdtday'>Day</Form.Label>
                             <Form.Label className='ansrecrdttime'>Time</Form.Label>
                        </Col>

                        <Form.Control className='ansrecrdtyearfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='ansrecrdtmonthfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='ansrecrdtdayfield' type='text' size='sm'></Form.Control>
                        <Form.Control className='ansrecrdttimefield' type='text' size='sm' placeholder='00:00'></Form.Control>
                    </div>

                    {/* Answer Record Search - Recall Matters field */}
                    <div className='ansrecrecallmattersbg'>
                        <Form.Label className='ansrecrecallmatters'>Recall Matters</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecrecallmattersdropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - PL Case field */}
                    <div className='ansrecplcasebg'>
                        <Form.Label className='ansrecplcase'>PL Case</Form.Label>
                        <Form.Control className='ansrecplcasefield' type='text' size='sm'></Form.Control>
                    </div>
                </div>
            </div>

            {/* Answer Record Search - Contents field */}
            <div className='ansreccontentsinfo'>
                <div className='g2'>
                    <h1 className='ansreccontentsheader'>Contents</h1>

                    {/* Answer Record Search - Item Name field */}
                    <div className='ansrecitemnamebg'>
                        <Form.Label className='ansrecitemname'>Item Name</Form.Label>
                        <Form.Control className='ansrecitemnamefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Inquiry Details field */}
                    <div className='ansrecinqdetailsbg'>
                        <Form.Label className='ansrecinqdetails'>Inquiry Details</Form.Label>
                        <Form.Control className='ansrecinqdetailsfield' type='text'></Form.Control>
                    </div>

                    {/* Answer Record Search - Contents field */}
                    <div className='ansreccontentscontbg'>
                        <Form.Label className='ansreccontentscont'>Contents</Form.Label>
                        <Form.Control className='ansreccontentscontfield' type='text'></Form.Control>
                    </div>

                    {/* Answer Record Search - Remarks field */}
                    <div className='ansrecremarksbg'>
                         <Form.Label className='ansrecremarks'>Remarks</Form.Label>
                         <Form.Control className='ansrecremarksfield' type='text'></Form.Control>
                    </div>
                </div>
            </div>

            {/* Answer Record Search - Common field */}
            <div className='ansreccommoninfo'>

                {/* Answer Record Search - First half of Common fields */}
                <div className='g2'>
                    <h1 className='ansrecommonheader'>Common</h1>

                    {/* Answer Record Search - Implementation of CS Surveys field */}
                    <div className='ansrecsurveysbg'>
                        <Form.Label className='ansrecsurveys'>Implementation of CS Surveys</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecsurvyesdropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Workaround field */}
                    <div className='ansrecworkaroundbg'>
                        <Form.Label className='ansrecworkaround'>Workaround</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecworkarounddropdown' size='sm'></Form.Select>
                    </div>

                </div>

                {/* Answer Record Search - Second half of Common fields */}
                <div className='g2'>

                    {/* Answer Record Search - Dissatisfied field */}
                    <div className='ansrecdissatisfiedbg'>
                        <Form.Label className='ansrecworkaround'>Dissatisfied</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecadissatisfiedfield' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Resolution Details */}
                    <div className='ansrecresobg'>
                        <Form.Label className='ansrecreso'>Resolution Details</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecresofield' size='sm'></Form.Select>
                    </div>
                </div>
            </div>

            {/* Answer Record Search - Home Appliance Information fields */}
            <div className='ansrechomeappinfo'>
                

                {/* First half of the Home Appliance Information fields */}
                <div className='g2'>
                    <h1 className='ansrechomeappheader'>Home Appliance Information</h1>

                    {/* Answer Record Search - Outcome field */}
                    <div className='ansrecoutcomebg'>
                        <Form.Label className='ansrecoutcome'>Outcome</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecoutcomedropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Action field */}
                    <div className='ansrecactionbg'>
                        <Form.Label className='andrecaction'>Action</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecactiondropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Customer Reference field */}
                    <div className='ansreccustrefbg'>
                        <Form.Label className='ansreccustref'>Customer Reference</Form.Label>
                        <Form.Select aria-label="Default" className='ansreccustrefdropdown' size='sm'></Form.Select>
                    </div>

                </div>

                {/* Second half of the Home Appliance Information fields */}
                <div className='g2'>

                    {/* Answer Record Search - Interview Code field */}
                    <div className='ansrecintcodebg'>
                        <Form.Label className='ansrecintcode'>Interview Code</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecintcodedropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Request for Proposal field */}
                    <div className='ansrecropbg'>
                        <Form.Label className='ansrecrop'>Request for Proposal</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecropdropdown' size='sm'></Form.Select>
                    </div>
                </div>
            </div>

            {/* Answer Record Search - Air Conditioning Information fields */}
            <div className='ansrecairconbg'>

                {/* First Half of Air Conditioning Information fields */}
                <div className='g2'>
                    <h1 className='ansrecairconheader'>Air Conditioning Information</h1>

                    {/* Answer Record Search - Control Number field */}
                    <div className='ansreccontrolnumbg'>
                        <Form.Label className='ansreccontrolnum'>Control Number</Form.Label>
                        <Form.Control className='ansreccontrolnumfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Flag field */}
                    <div className='ansrecflagbg'>
                         <Form.Label className='ansrecflag'>Flag</Form.Label>
                         <Form.Control className='ansrecflagfield' type='text' size='sm'></Form.Control>
                    </div>
                </div>


                {/* Second Half of Air Conditioning Information fields */}
                <div className='g2'>
                    
                    {/* Answer Record Search - Callback field */}
                    <div className='ansreccallbackbg'>
                        <Form.Label className='ansreccallback'>Callback</Form.Label>
                        <Form.Control className='ansreccallbackfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Business Classification field */}
                    <div className='ansrecbusinessclassbg'>
                        <Form.Label className='ansrecbusinessclass'>Business Classification</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecbusinessclassdropdown' size='sm'></Form.Select>
                    </div>
                </div>
            </div>

            {/* Answer Record Search - Cleaner fields */}
            <div className='ansreccleanerinfo'>

                {/* First Half of Cleaner fields */}
                <div className='g2'>
                    <h1 className='ansreccleanerheader'>Cleaner</h1>

                    {/* Answer Record Search - Model Number field */}
                    <div className='ansrecmodelnumbg'>
                        <Form.Label className='ansrecmodelnum'>Model Number</Form.Label>
                        <Form.Select aria-label="Default" className='ansrecmodelnumdropdown' size='sm'></Form.Select>
                    </div>

                    {/* Answer Record Search - Target Lot field */}
                    <div className='ansrectargetlotbg'>
                        <Form.Label className='ansrectargetlot'>Target Lot</Form.Label>
                        <Form.Select aria-label="Default" className='ansrectargetlotdropdown' size='sm'></Form.Select>
                    </div>
                </div>

                {/* Second Half of Cleaner fields */}
                <div className='g2'>
                    
                    {/* Answer Record Search - Manufacturing Number field */}
                    <div className='ansreccleanernumbg'>
                        <Form.Label className='ansreccleanernum'>Manufacturing No.</Form.Label>
                        <Form.Control className='ansreccleanernumfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Answer Record Search - Tranportation Request Number field */}
                    <div className='ansrectransponumbg'>
                        <Form.Label className='ansrectransponum'>Transportation Number</Form.Label>
                        <Form.Control className='ansrectransponumfield' type='text' size='sm'></Form.Control>
                    </div>
                </div>
            </div>


        </div>

    );
}


export default Secondforms;


