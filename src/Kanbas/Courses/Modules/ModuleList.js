import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };  
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col-4">
            <input
            value={module.name}
            onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
            }/>
            <textarea
            value={module.description}
            onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
            }/>
          </div>
          <div className="col">
            <button className="btn btn-primary me-2"
            onClick={() => dispatch(updateModule(module))}>
            Update
            </button>

            <button className="btn btn-success me-2"
              onClick={handleAddModule}>
              Add
            </button>
            </div>
          </div>
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button className="btn btn-warning ms-2" style={{float: 'right'}}
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button className="btn btn-danger ms-2" style={{float: 'right'}}
              //onClick={() => dispatch(deleteModule(module._id))}>
              onClick={() => handleDeleteModule(module._id)}>

              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
      {/* {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             {
                module.lessons && (
                    <ul className="list-group">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="list-group-item">
                                    <h4>{lesson.name}</h4>
                                      <button className="btn btn-success me-2"
                                      onClick={() => dispatch(setModule(module))}>
                                      Edit
                                      </button>
                                      <button className="btn btn-danger me-2"
                                      onClick={handleDeleteModule(module._id)}>
                                      Delete
                                      </button>
                                    <p>{lesson.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
           </li>
      ))
      } */}
    </ul>
  );
}
export default ModuleList;