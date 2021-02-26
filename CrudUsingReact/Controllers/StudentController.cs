using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CrudUsingReact.Models;


namespace CrudUsingReact.Controllers
{

    [RoutePrefix("Api/Student")]
    public class StudentController : ApiController
    {

            CrudDemoEntities db = new CrudDemoEntities();

            [Route("Getstudent")]
            [HttpGet]
            public object Studentdetails()
            {
                var s = db.studentmaster.ToList();
                return s;
            }


            [Route("StudentdetailById")]
            [HttpGet]
            public object StudentdetailById(int id)
            {
                var obj = db.studentmaster.Where(x => x.Id == id).ToList().FirstOrDefault();
                return obj;
            }

            [Route("Deletestudent")]
            [HttpDelete]
            public object Deletestudent(int id)
            {

                try
                {

                    var obj = db.studentmaster.Where(x => x.Id == id).ToList().FirstOrDefault();
                    db.studentmaster.Remove(obj);
                    db.SaveChanges();
                    return new Response()
                    {
                        Message = "Delete successfully",
                        Status = "Delete"
                    };
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }

                return new Response()
                {
                    Message = "Delete failed",
                    Status = "Not Delete"
                };
            }


            [Route("AddorUpdatestudent")]
            [HttpPost]
            public object AddorUpdatestudent(Student st)
            {

                try
                {

                    if (st.Id == 0)
                    {
                        studentmaster sm = new studentmaster();
                        sm.Name = st.Name;
                        sm.RollNo = st.Rollno;
                        sm.Address = st.Address;
                        sm.Class = st.Class;
                        db.studentmaster.Add(sm);
                        db.SaveChanges();
                        return new Response()
                        {
                            Status = "Success",
                            Message = "Data Successfully"
                        };
                    }
                    else
                    {

                        var obj = db.studentmaster.Where(x => x.Id == st.Id).ToList().FirstOrDefault();
                        if (obj.Id > 0)
                        {
                            obj.Name = st.Name;
                            obj.Address = st.Address;
                            obj.Class = st.Class;
                            obj.RollNo = st.Rollno;
                            db.SaveChanges();
                            return new Response()
                            {
                                Status = "Success",
                                Message = "Data Successfully"
                            };
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
                return new Response()
                {
                    Status = "Error",
                    Message = "Data not insert"
                };
            }
    }
}
