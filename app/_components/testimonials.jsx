// "use client";

// import { useEffect, useState } from 'react';
// import { motion } from '@/lib/motion';
// import { Quote } from 'lucide-react';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// const testimonials = [
//   {
//     quote: "Valtech has completely transformed how I create courses. What used to take weeks now takes hours, and the content quality is exceptional.",
//     author: "Dr. Sarah Johnson",
//     role: "Professor of Computer Science",
//     avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100"
//   },
//   {
//     quote: "The YouTube integration is brilliant. It automatically finds videos that perfectly supplement my teaching materials, saving me countless hours of searching.",
//     author: "Michael Chen",
//     role: "Online Course Creator",
//     avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100"
//   },
//   {
//     quote: "My students love the courses I create with Valtech. The content is engaging, well-structured, and the integrated videos provide different perspectives on complex topics.",
//     author: "Emma Rodriguez",
//     role: "Corporate Trainer",
//     avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
//   },
//   {
//     quote: "As someone who's not a natural content creator, Valtech has been a game-changer. The AI helps me articulate concepts clearly and create professional-quality courses.",
//     author: "Jamal Wright",
//     role: "Industry Expert & Educator",
//     avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
//   }
// ];

// export default function Testimonials() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <section id="testimonials" className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.5 }}
//           className="text-center max-w-3xl mx-auto mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Loved by Educators
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             See what our users are saying about their experience with Valtech
//           </p>
//         </motion.div>

//         <Carousel 
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="max-w-5xl mx-auto"
//         >
//           <CarouselContent>
//             {testimonials.map((testimonial, index) => (
//               <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="bg-card border border-border rounded-xl p-6 h-full flex flex-col"
//                 >
//                   <Quote className="h-10 w-10 text-primary/40 mb-4" />
//                   <p className="text-foreground flex-grow mb-6">"{testimonial.quote}"</p>
//                   <div className="flex items-center gap-4">
//                     <img 
//                       src={testimonial.avatar} 
//                       alt={testimonial.author} 
//                       className="w-12 h-12 rounded-full object-cover"
//                     />
//                     <div>
//                       <p className="font-semibold">{testimonial.author}</p>
//                       <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <div className="flex justify-center mt-8">
//             <CarouselPrevious className="static mr-2 transform-none" />
//             <CarouselNext className="static ml-2 transform-none" />
//           </div>
//         </Carousel>

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="mt-16 bg-card border border-border rounded-xl p-8 max-w-5xl mx-auto"
//         >
//           <div className="grid md:grid-cols-4 gap-6 text-center">
//             <div>
//               <p className="text-4xl font-bold text-primary mb-2">500+</p>
//               <p className="text-muted-foreground">Active Users</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-primary mb-2">2,500+</p>
//               <p className="text-muted-foreground">Courses Created</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-primary mb-2">15,000+</p>
//               <p className="text-muted-foreground">YouTube Videos</p>
//             </div>
//             <div>
//               <p className="text-4xl font-bold text-primary mb-2">98%</p>
//               <p className="text-muted-foreground">Satisfaction Rate</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }