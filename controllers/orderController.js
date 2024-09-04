// Import Model
const Orders = require('../models/orders');
const express = require('express');
// Function add and export
exports.createOrders = async (req,res) => {
    const {customer_name,product,quantity,order_date,status } =req.body;
    const Orders = new Orders({customer_name,product,quantity,order_date,status});
    try{
        const  orders = await orders.save();
        res.status(201).json(newOrders);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};
// Function update and export
exports.updqteOrders =async (req,res) => {
    try {
        const {id} =req.params;
        const updateOrders = await Orders.findByIdAndUpdate(id,req.body,{new:true});
        if (!updateOrders)return res.status(404).json({message:'Orders not found'});
        res.status(200).json(updateOrders);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};
// Function delete and export
exports.deleteOrders =async (req,res) => {
    try{
    const {id} = req.params;
    const deleteOrders = await Orders.findByIdAndDelete(id);
    if (!deleteOrders)return res.status(404).json({message:'Orders not found'});
    res.status(200).json({message: 'Status deleted successfully'});
    }catch(err){
    res.status(400).json({message:err.message});
    }
};
// Function get all data and export
exports.getOrderse =async (req,res) => {
    try{
        const orders = await Orders.find();
        res.json(orders);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    };
// Function get data by genre and export
exports.getOrders =async (req,res) => {
    try{
        const {id} = req.params;
        const orders = await Orders.findById(id);
        if(!orders)return res.status(404).json({message:'Orders not found '});
        res.json(Orders);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    };