import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

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
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
            </div>
          </div>
      </li>

      {
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
                                      onClick={() => dispatch(deleteModule(module._id))}>
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
      }
    </ul>
  );
}
export default ModuleList;