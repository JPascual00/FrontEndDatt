import 'bootstrap/dist/css/bootstrap.min.css';
import './Thirdform.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Cal from './calendar.png';
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const Thirdform = (props) => {

    const navigate = useNavigate();

    return(
        <div className='thirdform'>
            <h1 className='thirdformmainheader'> Repair Request Search</h1>

            {/* Search Criteria Information fields */}
            <div className='searchcriteriainfo'>
                <div className='g3'>
                    <h1 className='searchcriteriaheader'>Search Criteria</h1>

                    {/* Repair Request Search - Date of Reception field */}
                    <div className='repreqrecepdatebg'>
                        <Form.Label className='repreqrecepdate'>Reception Date</Form.Label>


                        <Col className='testcase3'>
                            <Form.Control className='repreqrecepdatefield1' type='text' size='sm'></Form.Control>
                            <img src={Cal} alt='Calendar Icon' className='repreqrecepdatecalendar1' />
                            <Form.Control className='repreqrecepdatefield2' type='text' size='sm'></Form.Control>
                            <img src={Cal} alt='Calendar Icon' className='repreqrecepdatecalendar2'/>
                        </Col>
                    </div>

                    {/* Repair Request Search - Classification field */}
                    <div className='repreqclassbg'>
                        <Form.Label className='repreqclass'>Classification</Form.Label>
                        <Form.Select aria-label="Default" className='repreqclassdropdown' size='sm'></Form.Select>
                    </div>

                    {/* Repair Request Search - Date of Completion field */}
                    <div className='repreqcompdatebg'>
                         <Form.Label className='repreqcompdate'>Completion Date</Form.Label>

                         <Col className='testcase3'>
                            <Form.Control className='repreqcompdatefield1' type='text' size='sm'></Form.Control>
                            <img src={Cal} alt='Calendar Icon' className='repreqcompdatecalendar1' />
                            <Form.Control className='repreqcompdatefield2' type='text' size='sm'></Form.Control>
                            <img src={Cal} alt='Calendar Icon' className='repreqcompdatecalendar2' />
                         </Col>
                    </div>

                    {/* Repair Request Search - Receptionist field */}
                    <div className='repreqreceptionistbg'>
                        <Form.Label className='repreqreceptionist'>Receptionist</Form.Label>
                        <Form.Control className='repreqreceptionistfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Product Group field */}
                    <div className='repreqprodgrpbg'>
                         <Form.Label className='repreqprodgrp'>Product Group</Form.Label>
                         <Form.Control className='repreqprodgrpfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Product Name field */}
                    <div className='repreqprodnamebg'>
                        <Form.Label className='repreqprodname'>Product Name</Form.Label>
                        <Form.Control className='repreqprodnamefield' type='text' size='sm'></Form.Control>
                        
                    </div>

                    {/* Repair Request Search - SS Code field */}
                    <div className='repreqsscodebg'>
                        <Form.Label className='repreqsscode'>SS Code</Form.Label>
                        <Form.Control className='repreqsscodefield' type='text' size='sm'></Form.Control>
                    </div>
                    
                    {/* Repair Request Search - Slip Number field */}
                    <div className='repreqslipnumbg'>
                        <Form.Label className='repreqslipnum'>Slip No.</Form.Label>
                        <Form.Control className='repreqslipnumfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Manufacturer Name field */}
                    <div className='repreqmanufacnamebg'>
                        <Form.Label className='repreqmanufacname'>Manufacturer Name</Form.Label>
                        <Form.Control className='repreqmanufacnamefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Dealer Tel field */}
                    <div className='repreqdealertelbg'>
                        <Form.Label className='repreqdealertel'>Dealer Tel</Form.Label>
                        <Form.Control className='repreqdealertelfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Dealer Fax field */}
                    <div className='repreqdealerfaxbg'>
                        <Form.Label className='repreqdealerfax'>Dealer Fax</Form.Label>
                        <Form.Control className='repreqdealerfaxfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Reception Number field */}
                    <div className='repreqrecepnumbg'>
                        <Form.Label className='repreqrecepnum'>Reception No.</Form.Label>
                        <Form.Control className='repreqrecepnumfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Zip Code field */}
                    <div className='repreqzipcodebg'>
                        <Form.Label className='repreqzipcode'>Zip Code</Form.Label>
                        <Form.Control className='repreqzipcodefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Reseller Code field */}
                    <div className='repreqrescodebg'>
                        <Form.Label className='repreqrescode'>Reseller Code</Form.Label>
                        <Form.Control className='repreqrescodefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Tel field */}
                    <div className='repreqtelbg'>
                        <Form.Label className='repreqtel'>Tel</Form.Label>
                        <Form.Control className='repreqtelfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Dealer Name field */}
                    <div className='repreqdealernamebg'>
                        <Form.Label className='repreqdealername'>Dealer Name</Form.Label>
                        <Form.Control className='repreqdealernamefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - User Name field */}
                    <div className='reprequsernamebg'>
                        <Form.Label className='reprequsername'>User Name</Form.Label>
                        <Form.Control className='reprequsernamefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - FE Contact Name field */}
                    <div className='repreqfecontnamebg'>
                        <Form.Label className='repreqfecontname'>FE Contact Name</Form.Label>
                        <Form.Control className='repreqfecontnamefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Reception Method field */}
                    <div className='repreqrecepmethodbg'>
                        <Form.Label className='repreqrecepmethod'>Reception Department</Form.Label>
                        <Form.Select aria-label="Default" className='repreqrecepmethoddropdown' size='sm'></Form.Select>
                    </div>

                    {/* Repair Request Search - Phonetic field */}
                    <div className='repreqphoneticbg'>
                        <Form.Label className='repreqphonetic'>Phonetic</Form.Label>
                        <Form.Control className='repreqphoneticfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Date of Visit field */}
                    <div className='repreqvisitdatebg'>
                         <Form.Label className='repreqvisitdate'>Date of Visit</Form.Label>
                         <Form.Control className='repreqvisitdatefield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Repair Method field */}
                    <div className='repreqrepairmethodbg'>
                         <Form.Label className='repreqrepairmethod'>Repair Method</Form.Label>
                         <Form.Select aria-label="Default" className='repreqrepairmethoddropdown' size='sm'></Form.Select>
                    </div>

                    {/* Repair Request Search - Manfacturing Number field */}
                    <div className='repreqmanufacnumbg'>
                         <Form.Label className='repreqmanufacnum'>Manufacturing No.</Form.Label>
                         <Form.Control className='repreqmanufacnumfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - Extended Warranty Number field */}
                    <div className='repreqwarrantybg'>
                         <Form.Label className='repreqwarranty'>Extended Warranty No.</Form.Label>
                         <Form.Control className='repreqwarrantyfield' type='text' size='sm'></Form.Control>
                    </div>

                    {/* Repair Request Search - PL Events field */}
                    <div className='repreqpleventsbg'>
                         <Form.Label className='repreqplevents'>PL Case</Form.Label>
                         <Form.Select aria-label="Default" className='repreqpleventsdropdown' size='sm'></Form.Select>
                    </div>

                    {/* Repair Request Search - Order Number field */}
                    <div className='repreqordernumbg'>
                         <Form.Label className='repreqordernum'>Order Number</Form.Label>
                         <Form.Select aria-label="Default" className='repreqordernumfield' size='sm'></Form.Select>
                    </div>

                    {/* Repair Request Search - Accident Information field */}
                    <div className='repreqaccidentinfobg'>
                        <Form.Label className='repreqaccidentinfo'>Accident Information</Form.Label>

                        <Col className='testcase3'>
                            <Form.Control className='accidentfield1' type='text' size='sm'></Form.Control>
                            <Form.Label className='dash1'>-</Form.Label>
                            <Form.Control className='accidentfield2' type='text' size='sm'></Form.Control>
                            <Form.Label className='dash1'>-</Form.Label>
                            <Form.Control className='accidentfield3' type='text' size='sm'></Form.Control>
                            <Form.Label className='dash1'>-</Form.Label>
                            <Form.Control className='accidentfield4' type='text' size='sm'></Form.Control>
                            <Form.Label className='dash1'>-</Form.Label>
                            <Form.Control className='accidentfield5' type='text' size='sm'></Form.Control>
                            <Form.Label className='dash1'>-</Form.Label>
                            <Form.Control className='accidentfield6' type='text' size='sm'></Form.Control>
                        </Col>
                    </div>

                    {/* Repair Request Search - Number of Display Permits field */}
                    <div className='repreqpermitsbg'>
                        <Form.Label className='repreqpermits'>Number of Display Permits</Form.Label>

                        <Col className='testcase3'>
                            <Form.Control className='repreqpermitsfield' type='text' size='sm'></Form.Control>
                            <Form.Label className='repreqpermitslabel'>Within&nbsp;10&nbsp;days</Form.Label>
                        </Col>
                    </div>

                    {/* Repair Request Search - Sort field */}
                    <div className='repreqsortbg'>
                         <Form.Label className='repreqsort'>Sort</Form.Label>
                         <Form.Select aria-label="Default" className='repreqsortdropdown' size='sm'></Form.Select>
                    </div>

                    {/* Repair Request Search - Sort Order field */}
                    <div className='repreqsortorderbg'>
                         <Form.Label className='repreqsortorder'>Sort Order</Form.Label>
                         <Form.Select aria-label="Default" className='repreqsortorderdropdown' size='sm'></Form.Select>
                    </div>

                    {/* Repair Request Search - EDI Data Extraction field */}
                    <div className='repreqdataextractbg'>
                         <Form.Label className='repreqdataextract'>EDI Data Extraction</Form.Label>
                    </div>

                    {/* Repair Request Search - CSV Import Data Extraction */}
                    <div className='repreqcsvdatabg'>
                         <Form.Label className='repreqcsvdata'>CSV Import Data Extraction</Form.Label>
                    </div>

                    {/* Repair Request Search - Send SMS field */}
                    <div className='repreqsmsbg'>
                        <Form.Label className='repreqsms'>Send SMS</Form.Label>
                    </div>
                </div>
            </div>

            {/* Third Form Tables */}
            <div className='thirdformtables'>
                <div className='g3'>
                    <Table striped bordered size="lg" className='thirdformmaintable'>
                        {/* Column Headers */}
                        <thead>
                            <tr className='thirdformcolumnheaders'>
                                <th className='thirdformheader'>Classification</th>
                                <th className='thirdformheader'>Repair&nbsp;Method</th>
                                <th className='thirdformheader'>SS&nbsp;Code</th>
                                <th className='thirdformheader'>Slip&nbsp;No.</th>
                                <th className='thirdformheader'>Reception&nbsp;No.</th>
                                <th className='thirdformheader'>Reception&nbsp;Date</th>
                                <th className='thirdformheader'>Product&nbsp;Name</th>
                                <th className='thirdformheader'> User&nbsp;Name</th>
                                <th className='thirdformheader'>User&nbsp;Tel</th>
                                <th className='thirdformheader'>Scheduled&nbsp;Visit&nbsp;Date</th>
                                <th className='thirdformheader'>Time&nbsp;Zone</th>
                                <th className='thirdformheader'>Time</th>
                                <th className='thirdformheader'>Dealer&nbsp;Name</th>
                                <th className='thirdformheader'>Dealer&nbsp;Tel</th>
                                <th className='thirdformheader'>Dealer&nbsp;Fax</th>
                                <th className='thirdformheader'>Reseller&nbsp;Code</th>
                                <th className='thirdformheader'>Receptionist&nbsp;Name</th>
                                <th className='thirdformheader'>FE&nbsp;Contact&nbsp;Name</th>
                                <th className='thirdformheader'>Completion&nbsp;Date</th>
                                <th className='thirdformheader'>Accident&nbsp;Information</th>
                                <th className='thirdformheader'>Extended&nbsp;Warranty&nbsp;No.</th>
                                <th className='thirdformheader'>Reason&nbsp;for&nbsp;Setting</th>
                                <th className='thirdformheader'>Manufacturing&nbsp;No.</th>
                            </tr>
                        </thead>
                        
                    </Table>
                </div>
            </div>
        </div>
    );
}


export default Thirdform;