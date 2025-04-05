import "./reg1.css"
import $ from 'jquery';
import "jquery-ui/dist/jquery-ui"
import "@fortawesome/fontawesome-svg-core"
import "@fortawesome/react-fontawesome"
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core"

export default function Reg1() {
    $(function () {
        $("#accordion").accordion({
            collapsible: true
        });
    });
    // var i = 0;
    $(".change").on("click", function(){
        // if(i == 0)
        // {
            $(".fa-sharp").css("display", "none");
            // $(".fa-sharp").addClass('fa-chevron-up');
        //     i = 1;
        // }
        // else
        // {
        //     $(".fa-sharp").removeClass('fa-chevron-up');
        //     // $(".fa-sharp").addClass('fa-chevron-down');
        //     i = 0;
        // }
    });

    return (
        <>
            <div id="main-register">
                <form name="Form" className="part-1">
                    <div className='flex-2' id ="team">
                        <div>
                            <label htmlFor="tname">Team Name</label>
                        </div>
                        <div>
                            <input type="text" name="tname" placeholder="Team Name" />
                        </div>
                    </div>
                    <div id="accordion">
                        <h3 className="change">Person 1 <i className="fa-sharp fa-solid fa-chevron-down"></i></h3>
                        <div>
                            <fieldset>
                                <legend>Student Information</legend>

                                <div className="flex-container">
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="name">Name</label>
                                        </div>

                                        <div>
                                            <input type="text" name="name" placeholder="Student's Name" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="num">Contact Number</label>
                                        </div>

                                        <div>
                                            <input type="tel" name="num" placeholder="Eg. 1234567890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="mail">E-mail Address</label>
                                        </div>

                                        <div>
                                            <input type="text" name="mail" placeholder="Institute Address" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="iname">Institute Name</label>
                                        </div>

                                        <div>
                                            <input type="text" name="iname" placeholder="Institute Name" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="cname">Course Enrolled</label>
                                        </div>

                                        <div>
                                            <input type="text" name="cname" placeholder="Eg. Computer Engineering" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="year">College Year</label>
                                        </div>

                                        <div>
                                            <select name="year">
                                                <option value="1">I</option>
                                                <option value="2">II</option>
                                                <option value="3">III</option>
                                                <option value="4">IV</option>
                                                <option value="5">V</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="">Gender</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="gender" id="Male" value="Male" />
                                            <label htmlFor="Male">Male</label>

                                            <input type="radio" name="gender" id="Female" value="Female" />
                                            <label htmlFor="Female">Female</label>

                                            <input type="radio" name="gender" id="Other" value="Other" />
                                            <label htmlFor="Other">Other</label>
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="photo">Profile Photo</label>
                                        </div>

                                        <div>
                                            <input type="file" name="photo" id="photo" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="cid">College ID</label>
                                        </div>

                                        <div>
                                            <input type="file" name="cid" id="cid" />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <h3 className="change">Person 2 <i className="fa-sharp fa-solid fa-chevron-down"></i></h3>
                        <div>
                            <fieldset>
                                <legend>Student Information</legend>

                                <div className="flex-container">
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="name">Name</label>
                                        </div>

                                        <div>
                                            <input type="text" name="name" placeholder="Student's Name" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="num">Contact Number</label>
                                        </div>

                                        <div>
                                            <input type="tel" name="num" placeholder="Eg. 1234567890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="mail">E-mail Address</label>
                                        </div>

                                        <div>
                                            <input type="text" name="mail" placeholder="Institute Address" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="iname">Institute Name</label>
                                        </div>

                                        <div>
                                            <input type="text" name="iname" placeholder="Institute Name" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="cname">Course Enrolled</label>
                                        </div>

                                        <div>
                                            <input type="text" name="cname" placeholder="Eg. Computer Engineering" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="year">College Year</label>
                                        </div>

                                        <div>
                                            <select name="year">
                                                <option value="1">I</option>
                                                <option value="2">II</option>
                                                <option value="3">III</option>
                                                <option value="4">IV</option>
                                                <option value="5">V</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="">Gender</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="gender" id="Male" value="Male" />
                                            <label htmlFor="Male">Male</label>

                                            <input type="radio" name="gender" id="Female" value="Female" />
                                            <label htmlFor="Female">Female</label>

                                            <input type="radio" name="gender" id="Other" value="Other" />
                                            <label htmlFor="Other">Other</label>
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="photo">Profile Photo</label>
                                        </div>

                                        <div>
                                            <input type="file" name="photo" id="photo" />
                                        </div>
                                    </div>
                                    <div className='flex-2'>
                                        <div>
                                            <label htmlFor="cid">College ID</label>
                                        </div>

                                        <div>
                                            <input type="file" name="cid" id="cid" />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" value="Submit" />
                        <input type="reset" value="Reset" />
                    </div>
                </form>
                <div id="part-2">
                    <img className="poster" src="data:image/jpeg;base64,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" alt="Sample" />
                </div>
            </div>
        </>
        // <>
        //     <div id="main-register">
        //         <form name="Form">

        //             <fieldset>
        //                 <legend>Team Lead Information</legend>
        //                 <table>
        //                     <tr>
        //                         <td><label htmlFor="name">Name</label></td>
        //                         <td><input type="text" name="name" placeholder="Student's Name" /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="mail">E-mail Address</label></td>
        //                         <td><input type="text" name="mail" placeholder="Institute Address" /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="num">Contact Number</label></td>
        //                         <td><input type="number" name="num" placeholder="Eg. 1234567890" min={1000000000} max={9999999999} /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="">Gender</label></td>
        //                         <td>
        //                             <input type="radio" name="Male" id="Male" />
        //                             <label htmlFor="Male">Male</label>
        //                             <input type="radio" name="Female" id="Female" />
        //                             <label htmlFor="Female">Female</label>
        //                             <input type="radio" name="Other" id="Other" />
        //                             <label htmlFor="Other">Other</label>
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="photo">Profile Photo</label></td>
        //                         <td><input type="file" name="photo" id="photo" /></td>
        //                     </tr>
        //                 </table>
        //             </fieldset>
        //             <fieldset>
        //                 <legend>Member-1 Information</legend>
        //                 <table>
        //                     <tr>
        //                         <td><label htmlFor="name">Name</label></td>
        //                         <td><input type="text" name="name" placeholder="Student's Name" /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="mail">E-mail Address</label></td>
        //                         <td><input type="text" name="mail" placeholder="Institute Address" /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="num">Contact Number</label></td>
        //                         <td><input type="number" name="num" placeholder="Eg. 1234567890" min={1000000000} max={9999999999} /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="">Gender</label></td>
        //                         <td>
        //                             <input type="radio" name="Male" id="Male" />
        //                             <label htmlFor="Male">Male</label>
        //                             <input type="radio" name="Female" id="Female" />
        //                             <label htmlFor="Female">Female</label>
        //                             <input type="radio" name="Other" id="Other" />
        //                             <label htmlFor="Other">Other</label>
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="photo">Profile Photo</label></td>
        //                         <td><input type="file" name="photo" id="photo" /></td>
        //                     </tr>
        //                 </table>
        //             </fieldset>
        //             <fieldset>
        //                 <legend>Member-2 Information</legend>
        //                 <table>
        //                     <tr>
        //                         <td><label htmlFor="name">Name</label></td>
        //                         <td><input type="text" name="name" placeholder="Student's Name" /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="mail">E-mail Address</label></td>
        //                         <td><input type="text" name="mail" placeholder="Institute Address" /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="num">Contact Number</label></td>
        //                         <td><input type="number" name="num" placeholder="Eg. 1234567890" min={1000000000} max={9999999999} /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="">Gender</label></td>
        //                         <td>
        //                             <input type="radio" name="Male" id="Male" />
        //                             <label htmlFor="Male">Male</label>
        //                             <input type="radio" name="Female" id="Female" />
        //                             <label htmlFor="Female">Female</label>
        //                             <input type="radio" name="Other" id="Other" />
        //                             <label htmlFor="Other">Other</label>
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="photo">Profile Photo</label></td>
        //                         <td><input type="file" name="photo" id="photo" /></td>
        //                     </tr>
        //                 </table>
        //             </fieldset>
        //             <fieldset>
        //                 <legend>Member-3 Information</legend>
        //                 <table>
        //                     <tr>
        //                         <td><label htmlFor="name">Name</label></td>
        //                         <td><input type="text" name="name" placeholder="Student's Name" /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="mail">E-mail Address</label></td>
        //                         <td><input type="text" name="mail" placeholder="Institute Address" /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="num">Contact Number</label></td>
        //                         <td><input type="number" name="num" placeholder="Eg. 1234567890" min={1000000000} max={9999999999} /></td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="">Gender</label></td>
        //                         <td>
        //                             <input type="radio" name="Male" id="Male" />
        //                             <label htmlFor="Male">Male</label>
        //                             <input type="radio" name="Female" id="Female" />
        //                             <label htmlFor="Female">Female</label>
        //                             <input type="radio" name="Other" id="Other" />
        //                             <label htmlFor="Other">Other</label>
        //                         </td>
        //                     </tr>
        //                     <tr>
        //                         <td><label htmlFor="photo">Profile Photo</label></td>
        //                         <td><input type="file" name="photo" id="photo" /></td>
        //                     </tr>
        //                 </table>
        //             </fieldset>
        //             <input type="submit" value="Submit" />
        //             <input type="reset" value="Reset" />
        //         </form>
        //     </div>
        // </>
    );
}